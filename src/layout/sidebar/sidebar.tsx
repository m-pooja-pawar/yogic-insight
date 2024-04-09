import {ExpandLess} from '@mui/icons-material';
import {ExpandMore} from '@mui/icons-material';
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemButtonProps,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import {ElementType, Fragment, RefObject, useCallback, useEffect, useState} from 'react';
import React from 'react';
import {NavLink, NavLinkProps, useLocation} from 'react-router-dom';

import {IndexItem} from '../indexList/indexList';
import {getIndexList} from '../indexList/indexList.api';

const StyledListItemButton = styled(ListItemButton)<
  ListItemButtonProps | (NavLinkProps & {readonly component: ElementType})
>(({theme}) => ({
  '&.MuiButtonBase-root': {
    paddingTop: '0px',
    paddingBottom: '0px',
    borderRadius: '5px',
    margin: '1px 0px',
    '&.active': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
  },
}));

export function Sidebar(): JSX.Element {
  const location = useLocation();
  const [sidebarData, setSidebarData] = useState<readonly IndexItem[]>([]);
  const [collapsed, setCollapsed] = useState<{
    [key: string]: boolean;
  }>({});
  const [htmlRef, setHtmlRef] = useState<{
    [key: string]: RefObject<HTMLLIElement>;
  }>({});
  const [navigationFromSidebar, setNavigationFromSidebar] = useState<boolean>(false);

  const getHtmlRef = (sidebarDataList: readonly IndexItem[]): {[key: string]: RefObject<HTMLLIElement>} => {
    const htmlRefData: {[key: string]: RefObject<HTMLLIElement>} = {};
    sidebarDataList.forEach((element: IndexItem) => {
      if (element.children && element.children.length) {
        element.children.forEach((childElement: IndexItem) => {
          htmlRefData[childElement.id] = React.createRef();
        });
      } else {
        htmlRefData[element.id] = React.createRef();
      }
    });
    return htmlRefData;
  };

  const getSidebarData = useCallback(() => {
    getIndexList().then((response) => {
      if (response && response.data) {
        setHtmlRef(getHtmlRef(response.data));
        setSidebarData(response.data);
      }
    });
  }, [setSidebarData]);

  useEffect(() => {
    getSidebarData();
  }, [getSidebarData]);

  useEffect(() => {
    if (!navigationFromSidebar) {
      setCollapsedBasedOnLocation();
      scrollToListItem();
    }
    setNavigationFromSidebar(false);
  }, [sidebarData, location]);

  useEffect(() => {
    if (!navigationFromSidebar) {
      setTimeout(() => {
        scrollToListItem();
      }, 1000);
    }
    setNavigationFromSidebar(false);
  }, [collapsed]);

  const setCollapsedBasedOnLocation = (): void => {
    if (sidebarData && sidebarData.length) {
      const childFound: IndexItem | undefined = sidebarData.find((element: IndexItem) => {
        if (element.children) {
          return element.children.find((childItem: IndexItem) => childItem.routing === location.pathname);
        }
      });
      if (childFound) {
        setCollapsed({
          ...collapsed,
          [childFound.id]: true,
        });
      }
    }
  };

  const handleCollapsableOnClick = (key: string, value: boolean): void => {
    setNavigationFromSidebar(true);
    setCollapsed({
      ...collapsed,
      [key]: value,
    });
  };

  const scrollToListItem = (): void => {
    let childFound: IndexItem | undefined = sidebarData.find((element: IndexItem) => {
      if (element.children) {
        return element.children.find((childElement: IndexItem) => childElement.routing === location.pathname);
      }
      return element.routing === location.pathname;
    });

    if (childFound) {
      if (childFound.children) {
        childFound = childFound.children?.find((element: IndexItem) => element.routing === location.pathname);
      }
      if (childFound) {
        const scrollToElement = htmlRef[childFound.id];
        if (scrollToElement && scrollToElement.current) {
          scrollToElement.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }
    }
  };

  const sidebarItem = (element: IndexItem, pl?: number): JSX.Element => {
    if (element.routing) {
      return (
        <ListItem
          disablePadding
          key={element.id}
          onClick={() => setNavigationFromSidebar(true)}
          ref={htmlRef[element.id]}
          sx={{pl}}>
          <StyledListItemButton component={NavLink} to={element.routing}>
            <ListItemText primary={element.label} secondary={element.label_en ? '(' + element.label_en + ')' : ''} />
          </StyledListItemButton>
        </ListItem>
      );
    }
    return (
      <React.Fragment key={element.id}>
        <Divider sx={{my: 2}}></Divider>
        <Typography color='primary' component='h6' mb={1} pl={2}>
          {element.label}
        </Typography>
      </React.Fragment>
    );
  };

  return sidebarData && sidebarData.length > 0 ? (
    <Box>
      <nav>
        <List dense>
          {sidebarData.map((element: IndexItem) => {
            if (element.children) {
              return (
                <Fragment key={'fragment' + element.id}>
                  <ListItem disablePadding key={element.id}>
                    <ListItemButton onClick={() => handleCollapsableOnClick(element.id, !collapsed[element.id])}>
                      <ListItemText primary={element.label} />
                      {collapsed[element.id] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </ListItem>
                  <Collapse unmountOnExit in={collapsed[element.id]} timeout='auto'>
                    {element.children.map((childElement: IndexItem) => {
                      return sidebarItem(childElement, 3);
                    })}
                  </Collapse>
                </Fragment>
              );
            }
            return sidebarItem(element);
          })}
        </List>
      </nav>
    </Box>
  ) : (
    <></>
  );
}
