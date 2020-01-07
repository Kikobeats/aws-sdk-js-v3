import {
  RAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RAMClient";
import {
  ListPermissionsRequest,
  ListPermissionsResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1ListPermissionsCommand,
  serializeAws_restJson1_1ListPermissionsCommand
} from "../protocols/Aws_restJson1_1";
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

export type ListPermissionsCommandInput = ListPermissionsRequest;
export type ListPermissionsCommandOutput = ListPermissionsResponse;

export class ListPermissionsCommand extends $Command<
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
  RAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPermissionsCommandInput, ListPermissionsCommandOutput> {
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
    input: ListPermissionsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListPermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListPermissionsCommandOutput> {
    return deserializeAws_restJson1_1ListPermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}