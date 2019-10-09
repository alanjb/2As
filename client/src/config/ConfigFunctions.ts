import { NavbarConfig } from ".";

let getMenuItems = function getDefaultNavbarConfig(): NavbarConfig {
  return {
    menu: {
      items: [
        {
          key: "bookmarks",
          to: "/bookmarks",
          text: "Bookmarks",
        },
        {
          key: "communities",
          to: "/portal/coi",
          text: "Communities",
        },
        {
          key: "portals",
          to: "/portal",
          text: "Portals",
        },
        {
          key: "rfis",
          to: "/rfi",
          text: "RFIs",
        },
        {
          key: "invite-user",
          to: "/invitenewuser",
          text: "Invite New User",
        },
        {
          key: "external-applications",
          to: "/partnerapps",
          text: "Partner Applications",
          
        },
      ],
    }
  }
}

export { getMenuItems}; 