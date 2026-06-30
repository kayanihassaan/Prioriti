/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Task {
  id: string;
  task_name: string;
  importance: number;
  difficulty: number;
  score: number;
  completed: boolean;
  created_at: string;
  ai_generated: boolean;
  context_tags: string[];
  notified?: boolean; // Track if notification was already sent
}
