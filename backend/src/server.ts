import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import cors from "cors";

import typeDefs from "./typedefs.js";
import resolvers from "./resolvers.js";
import DataProvider from "./movie-data-provider.js";

const dataProvider = new DataProvider();
const app = express();
const port = process.env.PORT || 3000;

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: executableSchema,
    context: dataProvider,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}/graphql`);
});
