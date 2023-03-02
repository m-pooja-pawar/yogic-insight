import {Box, Collapse, List, ListItem, ListItemButton, ListItemButtonProps, ListItemText, styled} from '@mui/material';
import {ElementType, Fragment, RefObject, useCallback, useEffect, useState} from 'react';
import {NavLink, NavLinkProps, useLocation} from 'react-router-dom';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {IndexItem} from './../interface/indexList';
import React from 'react';
import {getIndexList} from '../services/indexList';

const StyledListItemButton = styled(ListItemButton)<
  ListItemButtonProps | (NavLinkProps & {readonly component: ElementType})
>(({theme}) => ({
  '&.MuiButtonBase-root': {
    paddingTop: '0px',
    paddingBottom: '0px',
    borderRadius: '5px',
    margin: '1px 0px',
    '&.active': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
}));

export function Sidebar(): JSX.Element {
  const location = useLocation();
  const [sidebarData, setSidebarData] = useState<IndexItem[]>([]);
  const [collapsed, setCollapsed] = useState<{
    [key: string]: boolean;
  }>({});
  const [htmlRef, setHtmlRef] = useState<{
    [key: string]: RefObject<HTMLLIElement>;
  }>({});
  const [navigationFromSidebar, setNavigationFromSidebar] = useState<boolean>(false);

  const getHtmlRef = (sidebarDataList: IndexItem[]): {[key: string]: RefObject<HTMLLIElement>} => {
    const htmlRefData: {[key: string]: RefObject<HTMLLIElement>} = {};
    sidebarDataList.forEach((element: IndexItem) => {
      if (element.children && element.children.length) {
        element.children.forEach((childElement: IndexItem) => {
          htmlRefData[childElement.label.toString()] = React.createRef();
        });
      } else {
        htmlRefData[element.label.toString()] = React.createRef();
      }
    });
    return htmlRefData;
  };

  const getSidebarData = useCallback(() => {
    getIndexList().then((response) => {
      if (response && response.data) {
        setHtmlRef(getHtmlRef(response.data.data));
        setSidebarData(response.data.data);
      }
    });
  }, [setSidebarData]);

  useEffect(() => {
    getSidebarData();
  }, [getSidebarData]);

  useEffect(() => {
    if (location.pathname.indexOf('pose') > -1) {
      setCollapsedBasedOnLocation();
    } else {
      scrollToListItem();
    }
  }, [location]);

  useEffect(() => {
    setCollapsedBasedOnLocation();
  }, [sidebarData]);

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
          [childFound.label.toString()]: true,
        });
      }
    }
  };

  const handleCollapsableOnClick = (key: string, value: boolean): void => {
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
        const scrollToElement = htmlRef[childFound.label.toString()];
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
    return (
      <ListItem
        disablePadding
        key={element.label}
        onClick={() => setNavigationFromSidebar(true)}
        ref={htmlRef[element.label.toString()]}
        sx={{pl}}>
        <StyledListItemButton autoFocus={true} component={NavLink} to={element.routing}>
          <ListItemText primary={element.label} />
        </StyledListItemButton>
      </ListItem>
    );
  };

  return sidebarData && sidebarData.length > 0 ? (
    <Box>
      <nav>
        <List dense>
          {sidebarData.map((element: IndexItem) => {
            if (element.children) {
              return (
                <Fragment key={'fragment' + element.label}>
                  <ListItem disablePadding key={element.label}>
                    <ListItemButton
                      onClick={() =>
                        handleCollapsableOnClick(element.label.toString(), !collapsed[element.label.toString()])
                      }>
                      <ListItemText primary={element.label} />
                      {collapsed[element.label.toString()] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </ListItem>
                  <Collapse unmountOnExit in={collapsed[element.label.toString()]} timeout='auto'>
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
