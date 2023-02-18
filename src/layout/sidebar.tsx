import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemButtonProps,
  ListItemText,
  Typography,
  styled,
} from '@mui/material';
import {ElementType, Fragment, Key, useCallback, useEffect, useState} from 'react';
import {NavLink, NavLinkProps, To} from 'react-router-dom';

import axios from 'axios';

interface YogaSidebarNav {
  readonly children?: readonly YogaSidebarNav[];
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
    },
  },
}));

export function Sidebar(): JSX.Element {
  const [sidebarData, setSidebarData] = useState([]);

  const getSidebarData = useCallback(async () => {
    const response = await axios.get('./../../data/sidebar.json');
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
          {sidebarData.map((element: YogaSidebarNav) => {
            if (element.children) {
              return (
                <Fragment key={'fragment' + element.label}>
                  <Divider sx={{mt: 1}}></Divider>
                  <ListItem disablePadding key={element.label}>
                    <StyledListItemButton disabled component={Typography}>
                      <ListItemText primary={element.label} />
                    </StyledListItemButton>
                  </ListItem>
                  <Divider sx={{mb: 1}}></Divider>
                  {element.children.map((childElement: YogaSidebarNav) => {
                    return sideBarItem(childElement, 2);
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

function sideBarItem(element: YogaSidebarNav, pl?: number): JSX.Element {
  return (
    <ListItem disablePadding key={element.label} sx={{pl}}>
      <StyledListItemButton component={NavLink} to={element.routing}>
        <ListItemText primary={element.label} />
      </StyledListItemButton>
    </ListItem>
  );
}
