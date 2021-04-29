import { setupServer } from "msw/node";

import { publicationsHandlers } from "./publications";

export const server = setupServer(...publicationsHandlers);
