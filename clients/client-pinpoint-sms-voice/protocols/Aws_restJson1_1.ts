import {
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput
} from "../commands/CreateConfigurationSetCommand";
import {
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput
} from "../commands/CreateConfigurationSetEventDestinationCommand";
import {
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput
} from "../commands/DeleteConfigurationSetCommand";
import {
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput
} from "../commands/DeleteConfigurationSetEventDestinationCommand";
import {
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput
} from "../commands/GetConfigurationSetEventDestinationsCommand";
import {
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput
} from "../commands/ListConfigurationSetsCommand";
import {
  SendVoiceMessageCommandInput,
  SendVoiceMessageCommandOutput
} from "../commands/SendVoiceMessageCommand";
import {
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput
} from "../commands/UpdateConfigurationSetEventDestinationCommand";
import {
  AlreadyExistsException,
  BadRequestException,
  CallInstructionsMessageType,
  CloudWatchLogsDestination,
  EventDestination,
  EventDestinationDefinition,
  EventType,
  InternalServiceErrorException,
  KinesisFirehoseDestination,
  LimitExceededException,
  NotFoundException,
  PlainTextMessageType,
  SSMLMessageType,
  SnsDestination,
  TooManyRequestsException,
  VoiceMessageContent
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1CreateConfigurationSetCommand(
  input: CreateConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/sms-voice/configuration-sets";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ConfigurationSetName !== undefined) {
    bodyParams["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateConfigurationSetEventDestinationCommand(
  input: CreateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: any = input.ConfigurationSetName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
    );
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.EventDestination !== undefined) {
    bodyParams[
      "EventDestination"
    ] = serializeAws_restJson1_1EventDestinationDefinition(
      input.EventDestination,
      context
    );
  }
  if (input.EventDestinationName !== undefined) {
    bodyParams["EventDestinationName"] = input.EventDestinationName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteConfigurationSetCommand(
  input: DeleteConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/sms-voice/configuration-sets/{ConfigurationSetName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: any = input.ConfigurationSetName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteConfigurationSetEventDestinationCommand(
  input: DeleteConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: any = input.ConfigurationSetName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
    );
  }
  if (input.EventDestinationName !== undefined) {
    const labelValue: any = input.EventDestinationName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EventDestinationName."
      );
    }
    resolvedPath = resolvedPath.replace("{EventDestinationName}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: EventDestinationName."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetConfigurationSetEventDestinationsCommand(
  input: GetConfigurationSetEventDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: any = input.ConfigurationSetName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListConfigurationSetsCommand(
  input: ListConfigurationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/sms-voice/configuration-sets";
  const query: any = {};
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken.toString();
  }
  if (input.PageSize !== undefined) {
    query["PageSize"] = input.PageSize.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1SendVoiceMessageCommand(
  input: SendVoiceMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/sms-voice/voice/message";
  let body: any = {};
  const bodyParams: any = {};
  if (input.CallerId !== undefined) {
    bodyParams["CallerId"] = input.CallerId;
  }
  if (input.ConfigurationSetName !== undefined) {
    bodyParams["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.Content !== undefined) {
    bodyParams["Content"] = serializeAws_restJson1_1VoiceMessageContent(
      input.Content,
      context
    );
  }
  if (input.DestinationPhoneNumber !== undefined) {
    bodyParams["DestinationPhoneNumber"] = input.DestinationPhoneNumber;
  }
  if (input.OriginationPhoneNumber !== undefined) {
    bodyParams["OriginationPhoneNumber"] = input.OriginationPhoneNumber;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateConfigurationSetEventDestinationCommand(
  input: UpdateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: any = input.ConfigurationSetName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
    );
  }
  if (input.EventDestinationName !== undefined) {
    const labelValue: any = input.EventDestinationName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EventDestinationName."
      );
    }
    resolvedPath = resolvedPath.replace("{EventDestinationName}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: EventDestinationName."
    );
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.EventDestination !== undefined) {
    bodyParams[
      "EventDestination"
    ] = serializeAws_restJson1_1EventDestinationDefinition(
      input.EventDestination,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateConfigurationSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateConfigurationSetCommandError(
      output,
      context
    );
  }
  const contents: CreateConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateConfigurationSetResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateConfigurationSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.pinpoint_sms_voice#AlreadyExistsException":
      response = await deserializeAws_restJson1_1AlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.pinpoint_sms_voice#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.pinpoint_sms_voice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateConfigurationSetEventDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateConfigurationSetEventDestinationCommandError(
      output,
      context
    );
  }
  const contents: CreateConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateConfigurationSetEventDestinationResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateConfigurationSetEventDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.pinpoint_sms_voice#AlreadyExistsException":
      response = await deserializeAws_restJson1_1AlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.pinpoint_sms_voice#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint_sms_voice#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.pinpoint_sms_voice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteConfigurationSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteConfigurationSetCommandError(
      output,
      context
    );
  }
  const contents: DeleteConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteConfigurationSetResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteConfigurationSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint_sms_voice#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.pinpoint_sms_voice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteConfigurationSetEventDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteConfigurationSetEventDestinationCommandError(
      output,
      context
    );
  }
  const contents: DeleteConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteConfigurationSetEventDestinationResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteConfigurationSetEventDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint_sms_voice#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.pinpoint_sms_voice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetConfigurationSetEventDestinationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetConfigurationSetEventDestinationsCommandError(
      output,
      context
    );
  }
  const contents: GetConfigurationSetEventDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetConfigurationSetEventDestinationsResponse",
    EventDestinations: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.EventDestinations !== undefined) {
    contents.EventDestinations = deserializeAws_restJson1_1EventDestinations(
      data.EventDestinations,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetConfigurationSetEventDestinationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint_sms_voice#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.pinpoint_sms_voice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListConfigurationSetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListConfigurationSetsCommandError(
      output,
      context
    );
  }
  const contents: ListConfigurationSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListConfigurationSetsResponse",
    ConfigurationSets: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ConfigurationSets !== undefined) {
    contents.ConfigurationSets = deserializeAws_restJson1_1ConfigurationSets(
      data.ConfigurationSets,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListConfigurationSetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.pinpoint_sms_voice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1SendVoiceMessageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendVoiceMessageCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1SendVoiceMessageCommandError(
      output,
      context
    );
  }
  const contents: SendVoiceMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendVoiceMessageResponse",
    MessageId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.MessageId !== undefined) {
    contents.MessageId = data.MessageId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SendVoiceMessageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendVoiceMessageCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.pinpoint_sms_voice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateConfigurationSetEventDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateConfigurationSetEventDestinationCommandError(
      output,
      context
    );
  }
  const contents: UpdateConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateConfigurationSetEventDestinationResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateConfigurationSetEventDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint_sms_voice#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.pinpoint_sms_voice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1AlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const contents: AlreadyExistsException = {
    __type: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    __type: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServiceErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const contents: InternalServiceErrorException = {
    __type: "InternalServiceErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    __type: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    __type: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1CallInstructionsMessageType = (
  input: CallInstructionsMessageType,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CloudWatchLogsDestination = (
  input: CloudWatchLogsDestination,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IamRoleArn !== undefined) {
    bodyParams["IamRoleArn"] = input.IamRoleArn;
  }
  if (input.LogGroupArn !== undefined) {
    bodyParams["LogGroupArn"] = input.LogGroupArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EventDestinationDefinition = (
  input: EventDestinationDefinition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CloudWatchLogsDestination !== undefined) {
    bodyParams[
      "CloudWatchLogsDestination"
    ] = serializeAws_restJson1_1CloudWatchLogsDestination(
      input.CloudWatchLogsDestination,
      context
    );
  }
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.KinesisFirehoseDestination !== undefined) {
    bodyParams[
      "KinesisFirehoseDestination"
    ] = serializeAws_restJson1_1KinesisFirehoseDestination(
      input.KinesisFirehoseDestination,
      context
    );
  }
  if (input.MatchingEventTypes !== undefined) {
    bodyParams["MatchingEventTypes"] = serializeAws_restJson1_1EventTypes(
      input.MatchingEventTypes,
      context
    );
  }
  if (input.SnsDestination !== undefined) {
    bodyParams["SnsDestination"] = serializeAws_restJson1_1SnsDestination(
      input.SnsDestination,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1EventTypes = (
  input: Array<EventType | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1KinesisFirehoseDestination = (
  input: KinesisFirehoseDestination,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DeliveryStreamArn !== undefined) {
    bodyParams["DeliveryStreamArn"] = input.DeliveryStreamArn;
  }
  if (input.IamRoleArn !== undefined) {
    bodyParams["IamRoleArn"] = input.IamRoleArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1PlainTextMessageType = (
  input: PlainTextMessageType,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.LanguageCode !== undefined) {
    bodyParams["LanguageCode"] = input.LanguageCode;
  }
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  if (input.VoiceId !== undefined) {
    bodyParams["VoiceId"] = input.VoiceId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SSMLMessageType = (
  input: SSMLMessageType,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.LanguageCode !== undefined) {
    bodyParams["LanguageCode"] = input.LanguageCode;
  }
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  if (input.VoiceId !== undefined) {
    bodyParams["VoiceId"] = input.VoiceId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SnsDestination = (
  input: SnsDestination,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TopicArn !== undefined) {
    bodyParams["TopicArn"] = input.TopicArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1VoiceMessageContent = (
  input: VoiceMessageContent,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CallInstructionsMessage !== undefined) {
    bodyParams[
      "CallInstructionsMessage"
    ] = serializeAws_restJson1_1CallInstructionsMessageType(
      input.CallInstructionsMessage,
      context
    );
  }
  if (input.PlainTextMessage !== undefined) {
    bodyParams[
      "PlainTextMessage"
    ] = serializeAws_restJson1_1PlainTextMessageType(
      input.PlainTextMessage,
      context
    );
  }
  if (input.SSMLMessage !== undefined) {
    bodyParams["SSMLMessage"] = serializeAws_restJson1_1SSMLMessageType(
      input.SSMLMessage,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_restJson1_1CloudWatchLogsDestination = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsDestination => {
  let contents: any = {
    __type: "CloudWatchLogsDestination",
    IamRoleArn: undefined,
    LogGroupArn: undefined
  };
  if (output.IamRoleArn !== undefined) {
    contents.IamRoleArn = output.IamRoleArn;
  }
  if (output.LogGroupArn !== undefined) {
    contents.LogGroupArn = output.LogGroupArn;
  }
  return contents;
};

const deserializeAws_restJson1_1ConfigurationSets = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1EventDestination = (
  output: any,
  context: __SerdeContext
): EventDestination => {
  let contents: any = {
    __type: "EventDestination",
    CloudWatchLogsDestination: undefined,
    Enabled: undefined,
    KinesisFirehoseDestination: undefined,
    MatchingEventTypes: undefined,
    Name: undefined,
    SnsDestination: undefined
  };
  if (output.CloudWatchLogsDestination !== undefined) {
    contents.CloudWatchLogsDestination = deserializeAws_restJson1_1CloudWatchLogsDestination(
      output.CloudWatchLogsDestination,
      context
    );
  }
  if (output.Enabled !== undefined) {
    contents.Enabled = output.Enabled;
  }
  if (output.KinesisFirehoseDestination !== undefined) {
    contents.KinesisFirehoseDestination = deserializeAws_restJson1_1KinesisFirehoseDestination(
      output.KinesisFirehoseDestination,
      context
    );
  }
  if (output.MatchingEventTypes !== undefined) {
    contents.MatchingEventTypes = deserializeAws_restJson1_1EventTypes(
      output.MatchingEventTypes,
      context
    );
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.SnsDestination !== undefined) {
    contents.SnsDestination = deserializeAws_restJson1_1SnsDestination(
      output.SnsDestination,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1EventDestinations = (
  output: any,
  context: __SerdeContext
): Array<EventDestination> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1EventDestination(entry, context)
  );
};

const deserializeAws_restJson1_1EventTypes = (
  output: any,
  context: __SerdeContext
): Array<EventType | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1KinesisFirehoseDestination = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseDestination => {
  let contents: any = {
    __type: "KinesisFirehoseDestination",
    DeliveryStreamArn: undefined,
    IamRoleArn: undefined
  };
  if (output.DeliveryStreamArn !== undefined) {
    contents.DeliveryStreamArn = output.DeliveryStreamArn;
  }
  if (output.IamRoleArn !== undefined) {
    contents.IamRoleArn = output.IamRoleArn;
  }
  return contents;
};

const deserializeAws_restJson1_1SnsDestination = (
  output: any,
  context: __SerdeContext
): SnsDestination => {
  let contents: any = {
    __type: "SnsDestination",
    TopicArn: undefined
  };
  if (output.TopicArn !== undefined) {
    contents.TopicArn = output.TopicArn;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};