import { NavbarConfig } from ".";

let getMenuItems = function getDefaultNavbarConfig(): NavbarConfig {
  return {
    menu: {
      items: [
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
          to: "/invitations/invite",
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