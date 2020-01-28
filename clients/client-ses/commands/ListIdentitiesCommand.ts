import {
  SESClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SESClient";
import { ListIdentitiesRequest, ListIdentitiesResponse } from "../models/index";
import {
  deserializeAws_queryListIdentitiesCommand,
  serializeAws_queryListIdentitiesCommand
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type ListIdentitiesCommandInput = ListIdentitiesRequest;
export type ListIdentitiesCommandOutput = ListIdentitiesResponse;

export class ListIdentitiesCommand extends $Command<
  ListIdentitiesCommandInput,
  ListIdentitiesCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListIdentitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListIdentitiesCommandInput, ListIdentitiesCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListIdentitiesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryListIdentitiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListIdentitiesCommandOutput> {
    return deserializeAws_queryListIdentitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}