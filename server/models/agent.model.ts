import mongoose, { Schema, model } from 'mongoose';
import type { IAgent } from '~/types';
import AgentFeedback from '~/server/models/angentFeedback.model';

const AgentSchema = new Schema<IAgent>({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    required: true,
  },
  agentFeedback: {
    type: mongoose.Schema.Types.ObjectId,
    ref: AgentFeedback,
    required: false,
  },
  description: {
    type: String,
    required: true,
  }
})

const Agent = model<IAgent>('Agent', AgentSchema);

export default Agent;
