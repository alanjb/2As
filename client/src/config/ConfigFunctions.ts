import { NavbarConfig } from ".";

let getMenuItems = function getDefaultNavbarConfig(): NavbarConfig {
  return {
    menu: {
      items: [
        {
          key: "communities",
          href: "/portal/coi",
          text: "Communities",
        },
        {
          key: "portals",
          href: "/portal",
          text: "Portals",
        },
        {
          key: "rfis",
          href: "/rfi",
          text: "RFIs",
        },
        {
          key: "invite-user",
          href: "/invitations/invite",
          text: "Invite New User",
        },
        {
          key: "external-applications",
          text: "Partner Applications",
        },
      ],
    }
  }
}

export {getMenuItems}; 