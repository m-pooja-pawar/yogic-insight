import {Box, List, ListItem, ListItemButton, ListItemButtonProps, ListItemText, styled} from '@mui/material';
import {ElementType, Fragment, Key, useCallback, useEffect, useState} from 'react';
import {NavLink, NavLinkProps, To} from 'react-router-dom';

import axios from 'axios';

interface IndexItem {
  readonly children?: readonly IndexItem[];
  readonly collapsed?: boolean;
  readonly label: Key;
  readonly routing: To;
}

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
  const [sidebarData, setSidebarData] = useState([]);

  const getSidebarData = useCallback(async () => {
    const response = await axios.get('./../../data/index.json');
    if (response && response.data) {
      setSidebarData(response.data.data);
    }
  }, [setSidebarData]);

  useEffect(() => {
    getSidebarData();
  }, [getSidebarData]);

  return sidebarData && sidebarData.length > 0 ? (
    <Box>
      <nav>
        <List dense>
          {sidebarData.map((element: IndexItem) => {
            if (element.children) {
              return (
                <Fragment key={'fragment' + element.label}>
                  {sideBarItem(element)}
                  {element.children.map((childElement: IndexItem) => {
                    return sideBarItem(childElement, 3);
                  })}
                </Fragment>
              );
            }
            return sideBarItem(element);
          })}
        </List>
      </nav>
    </Box>
  ) : (
    <></>
  );
}

function sideBarItem(element: IndexItem, pl?: number): JSX.Element {
  return (
    <ListItem disablePadding key={element.label} sx={{pl}}>
      <StyledListItemButton component={NavLink} to={element.routing}>
        <ListItemText primary={element.label} />
      </StyledListItemButton>
    </ListItem>
  );
}
