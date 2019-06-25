import { EnvConfig } from "./EnvConfig";
import { EnvConstants } from "./EnvConstants";
import { ApiConfig, NavbarConfig } from ".";
import { AppConfig } from "./AppConfig";

const PIXDESIGNGUIDE_CONFIG_KEY = "piXDesignGuideConfig";
const DEFAULT_ENV_CONSTANTS: EnvConstants = {
  baseApiUrl: "https://www-pix3-api.pixtomorrow.net",
  baseUiUrl: "https://www-pix3.pixtomorrow.net",
//   emailDomain: "share-integ.pixtomorrow.net",
};

const DEFAULT_CONFIG = getDefaultConfig(DEFAULT_ENV_CONSTANTS);

function getPiXDesignGuideConfig(): EnvConfig {
    const config = <EnvConfig>window[PIXDESIGNGUIDE_CONFIG_KEY] || DEFAULT_CONFIG;
    return config;
}

export function setPiXDesignGuideConfig(config: EnvConfig) {
    window[PIXDESIGNGUIDE_CONFIG_KEY] = config;
}
