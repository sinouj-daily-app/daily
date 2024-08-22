import gql from "graphql-tag";
import {readdirSync, readFileSync} from "node:fs";
import path from "node:path";

export const readSchema = (schema: string) => {
    return gql(
        readFileSync(path.resolve( `src/schemas/${schema}`), {
            encoding: "utf-8",
        })
    );
}

export const getSchemaFiles = (location: string) => {
    return readdirSync(path.resolve(location));
}