// import { ApiConfig } from "./ApiConfig";
import { AppConfig } from "./AppConfig";
import { NavbarConfig } from "./NavbarConfig";
import { IconConfig } from "./IconConfig";

export interface EnvConfig {
  app: AppConfig;
  icons: IconConfig;
  navbarConfig: NavbarConfig;
}