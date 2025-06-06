/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";

export const NumericalFeedbackDetail: core.serialization.ObjectSchema<
    serializers.NumericalFeedbackDetail.Raw,
    OpikApi.NumericalFeedbackDetail
> = core.serialization.object({
    max: core.serialization.number(),
    min: core.serialization.number(),
});

export declare namespace NumericalFeedbackDetail {
    export interface Raw {
        max: number;
        min: number;
    }
}
