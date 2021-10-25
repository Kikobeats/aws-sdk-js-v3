import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { WorkLinkClientConfig } from "./WorkLinkClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkLinkClientConfig) => ({
  apiVersion: "2018-09-25",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "WorkLink",
  urlParser: config?.urlParser ?? parseUrl,
});