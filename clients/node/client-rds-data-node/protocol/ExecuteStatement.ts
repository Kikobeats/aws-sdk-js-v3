import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { SerializerContext, DeserializerContext } from "@aws-sdk/types";
import {
  ExecuteStatementRequest,
  ExecuteStatementResponse
} from "../models/rdsdataservice";
import {
  executeStatementAwsRestJson1_1Serialize,
  executeStatementAwsRestJson1_1Deserialize
} from "./AwsRestJson1_1";

export function executeStatementSerializer(
  input: ExecuteStatementRequest,
  protocol: string,
  utils: SerializerContext
): HttpRequest {
  switch (protocol) {
    case "aws.rest-json-1.1":
      return executeStatementAwsRestJson1_1Serialize(input, utils);
    default:
      throw new Error("Unknown protocol, use aws.rest-json-1.1");
  }
}

export async function executeStatementDeserializer(
  output: HttpResponse,
  protocol: string,
  utils: DeserializerContext
): Promise<ExecuteStatementResponse> {
  switch (protocol) {
    case "aws.rest-json-1.1":
      return executeStatementAwsRestJson1_1Deserialize(output, utils);
    default:
      throw new Error("Unknown protocol, use aws.rest-json-1.1");
  }
}