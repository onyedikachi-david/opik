/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as OpikApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { JsonNodeWrite } from "../../../../types/JsonNodeWrite";
import { ExperimentWriteType } from "../../types/ExperimentWriteType";
import { PromptVersionLinkWrite } from "../../../../types/PromptVersionLinkWrite";

export const ExperimentWrite: core.serialization.Schema<serializers.ExperimentWrite.Raw, OpikApi.ExperimentWrite> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        datasetName: core.serialization.property("dataset_name", core.serialization.string()),
        name: core.serialization.string().optional(),
        metadata: JsonNodeWrite.optional(),
        type: ExperimentWriteType.optional(),
        optimizationId: core.serialization.property("optimization_id", core.serialization.string().optional()),
        promptVersion: core.serialization.property("prompt_version", PromptVersionLinkWrite.optional()),
        promptVersions: core.serialization.property(
            "prompt_versions",
            core.serialization.list(PromptVersionLinkWrite).optional(),
        ),
    });

export declare namespace ExperimentWrite {
    export interface Raw {
        id?: string | null;
        dataset_name: string;
        name?: string | null;
        metadata?: JsonNodeWrite.Raw | null;
        type?: ExperimentWriteType.Raw | null;
        optimization_id?: string | null;
        prompt_version?: PromptVersionLinkWrite.Raw | null;
        prompt_versions?: PromptVersionLinkWrite.Raw[] | null;
    }
}
