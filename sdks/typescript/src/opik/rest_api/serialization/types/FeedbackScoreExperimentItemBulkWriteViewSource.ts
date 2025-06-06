/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";

export const FeedbackScoreExperimentItemBulkWriteViewSource: core.serialization.Schema<
    serializers.FeedbackScoreExperimentItemBulkWriteViewSource.Raw,
    OpikApi.FeedbackScoreExperimentItemBulkWriteViewSource
> = core.serialization.enum_(["ui", "sdk", "online_scoring"]);

export declare namespace FeedbackScoreExperimentItemBulkWriteViewSource {
    export type Raw = "ui" | "sdk" | "online_scoring";
}
