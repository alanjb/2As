import React from 'react';
export default React.createContext({
  isSidePanelOpen: false,
  isAddToPortalModalOpen: false,
  toggleSidePanel: () => {},
  toggleInviteToPortalModal: () => {}
});
