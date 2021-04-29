import { rest } from "msw";
import Qs from "qs";
import { QueryOptions } from "@src/@types/services/base";
import mock from "./mock.json";

const baseUrl = "/api/v2/magazine/edition";

export const publicationsMock = rest.get(baseUrl, (req, res, ctx) => {
  const params = Qs.parse(req.url.toString()) as QueryOptions;

  if (params?.filter?.[0]?.field === "name") {
    return res(
      ctx.status(200),
      ctx.json({
        ...mock,
        _embedded: {
          ...mock._embedded,
          edition: mock._embedded.edition.filter(
            (edition) => edition.name === params?.filter?.[0]?.value
          ),
        },
      })
    );
  }

  return res(ctx.status(200), ctx.json(mock));
});

export const publicationsHandlers = [publicationsMock];
