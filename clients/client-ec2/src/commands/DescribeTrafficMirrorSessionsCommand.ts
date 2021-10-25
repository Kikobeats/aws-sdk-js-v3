import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTrafficMirrorSessionsRequest, DescribeTrafficMirrorSessionsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeTrafficMirrorSessionsCommand,
  serializeAws_ec2DescribeTrafficMirrorSessionsCommand,
} from "../protocols/Aws_ec2";

export interface DescribeTrafficMirrorSessionsCommandInput extends DescribeTrafficMirrorSessionsRequest {}
export interface DescribeTrafficMirrorSessionsCommandOutput
  extends DescribeTrafficMirrorSessionsResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTrafficMirrorSessionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTrafficMirrorSessionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTrafficMirrorSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrafficMirrorSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrafficMirrorSessionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeTrafficMirrorSessionsCommand extends $Command<
  DescribeTrafficMirrorSessionsCommandInput,
  DescribeTrafficMirrorSessionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTrafficMirrorSessionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTrafficMirrorSessionsCommandInput, DescribeTrafficMirrorSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTrafficMirrorSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTrafficMirrorSessionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTrafficMirrorSessionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTrafficMirrorSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeTrafficMirrorSessionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTrafficMirrorSessionsCommandOutput> {
    return deserializeAws_ec2DescribeTrafficMirrorSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}