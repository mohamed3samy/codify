'use server';

import Question from '@/database/question.model';
import { connectToDB } from '../mongoose';
import { ViewQuestionParams } from './shared.types';
import Interaction from '@/database/interaction.model';

export async function viewQuestion(params: ViewQuestionParams) {
  try {
    await connectToDB();

    const { questionId, userId } = params;

    // Update view count for the question
    await Question.findByIdAndUpdate(questionId, { $inc: { views: 1 } });

    // Create interaction
    if (userId) {
      await Interaction.create({
        user: userId,
        action: 'view',
        question: questionId,
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
