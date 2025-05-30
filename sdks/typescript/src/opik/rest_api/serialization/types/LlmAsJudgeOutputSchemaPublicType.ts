/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";

export const LlmAsJudgeOutputSchemaPublicType: core.serialization.Schema<
    serializers.LlmAsJudgeOutputSchemaPublicType.Raw,
    OpikApi.LlmAsJudgeOutputSchemaPublicType
> = core.serialization.enum_(["BOOLEAN", "INTEGER", "DOUBLE"]);

export declare namespace LlmAsJudgeOutputSchemaPublicType {
    export type Raw = "BOOLEAN" | "INTEGER" | "DOUBLE";
}
