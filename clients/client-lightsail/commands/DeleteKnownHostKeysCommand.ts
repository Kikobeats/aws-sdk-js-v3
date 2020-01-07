import {
  LightsailClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../LightsailClient";
import {
  DeleteKnownHostKeysRequest,
  DeleteKnownHostKeysResult
} from "../models/index";
import {
  deserializeAws_json1_1DeleteKnownHostKeysCommand,
  serializeAws_json1_1DeleteKnownHostKeysCommand
} from "../protocols/Aws_json1_1";
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

export type DeleteKnownHostKeysCommandInput = DeleteKnownHostKeysRequest;
export type DeleteKnownHostKeysCommandOutput = DeleteKnownHostKeysResult;

export class DeleteKnownHostKeysCommand extends $Command<
  DeleteKnownHostKeysCommandInput,
  DeleteKnownHostKeysCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteKnownHostKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteKnownHostKeysCommandInput,
    DeleteKnownHostKeysCommandOutput
  > {
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
    input: DeleteKnownHostKeysCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteKnownHostKeysCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeleteKnownHostKeysCommandOutput> {
    return deserializeAws_json1_1DeleteKnownHostKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}