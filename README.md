## Development Workflow

This project utilizes Git for version control.

[Git in 100 Seconds](https://www.youtube.com/watch?v=hwP7WQkmECE)

### Contribution Steps

**Step 1: Creating Branches**

In order to contribute to the project, all developers should create branches following the specified naming convention. The branch naming convention should be as follows:

> **Note:** All branches should be created from **dev** branch

Here are the details for each component of the branch name convention:

```
<taskType>/<taskNumber>_<briefDescription>
```

- `<taskType>`: The type of the task being worked on. It can be one of the following:

  - `bug`: For bug fixes.
  - `enhancement`: For enhancements or improvements to existing features.
  - `feature`: For the development of new features.

- `<taskNumber>`: Trello card number for the task. It helps in tracking and referencing the task.

- `<briefDescription>`: A brief and descriptive text summarizing the task.

For example, if a developer is working on an enhancement task with the task number 42 and the brief description "update user profile," the branch name should be:

```
enhancement/42_update-user-profile
```

> **Important: Do not push directly to the dev branch!** It is crucial to avoid pushing changes directly to the dev branch. Instead, always create a new branch from dev and submit a pull request when ready for code review and merging.

By following this naming convention, it becomes easier to track and manage tasks within the version control system.

Remember to communicate and coordinate with the team to avoid any naming conflicts.

**Step 2: Writing Commit Messages**

To commit your changes locally, use the following commands:

```bash
git add . #Add all modified files to the staging area
```

```bash
git commit -m "Commit message" # Commit the changes with a descriptive message
```

> **Note:** It is recommended to use the command line interface for Git operations instead of built-in IDE tools when commiting. This ensures compatibility with our Husky verification and pre-commit hooks. Please avoid using IDE-specific Git tools for a consistent development workflow.

Here are some examples of bad commit messages to avoid:

- "Fix bug"
- "Update code"
- "Changes"
- "Testing"
- "Attım tut"
- "Devaam ke"

Having clear and informative commit messages is crucial for maintaining a well-documented and organized codebase. Follow these guidelines when writing commit messages:

- **Be Descriptive**: Provide a concise and descriptive summary of the changes made in the commit. The message should accurately convey the purpose and impact of the commit.

- **Use Imperative Verbs**: Write commit messages in the imperative mood. Start the message with a verb that describes what the commit does.

- **Keep it Short**: Ideally, commit messages should be no longer than 50-72 characters in the subject line. If necessary, provide additional details in the body of the commit message, separating it from the subject line with a blank line.

- **Provide Context**: Include any relevant information or context in the commit message. Mention any related issues, tasks, or tickets associated with the commit.

- **Use Consistent Format**: Establish a consistent format for commit messages in our project. This could include using prefixes to indicate the type of commit (e.g., feat: for new features, fix: for bug fixes, docs: for documentation updates, etc.).

- **Avoid Ambiguity**: Be specific and avoid ambiguous language in your commit messages. Clearly state what was changed, added, or removed.

- **Proofread and Spell Check**: Double-check your commit messages for any spelling or grammatical errors. Clear and error-free messages enhance readability and professionalism.

By following these guidelines, we can maintain a well-documented history of our project, facilitate code reviews, and improve collaboration within the team.

Please ensure that every commit adheres to these guidelines.

**Step 3: Opening a Pull Request (PR)**

When you're ready to submit a new feature or bug fix, create a new branch following the branch naming convention mentioned earlier.

Push your branch to the remote repository and open a pull request (PR) targeting the appropriate branch (e.g., `dev`).

1. **Pull Request Title**: The title of the pull request should follow this format:

```
[<taskNumber>] <briefDescription>
```

For example, if you are working on a bug fix with task number 123 and the brief description is "Fix login form validation," the pull request title should be:

```
[123] Fix login form validation
```

2. **Labeling**: Assign the appropriate `<taskType>` label to the pull request. This ensures that the PR is categorized correctly based on the type of task being addressed (e.g., `bug`, `enhancement`, `feature`).

3. **Clear and Concise Description**: Provide a clear and concise description of the changes made in the pull request. Explain the problem being addressed, the solution implemented, and any considerations or side effects of the changes. Include relevant information that helps reviewers understand the context and purpose of the pull request.

By following these guidelines, it becomes easier for reviewers and team members to track, review, and manage pull requests effectively.

**Step 3: Sending for Code Review**

Code reviews play a crucial role in maintaining code quality, ensuring best practices, and fostering collaboration within our development team. Here's an overview of our code review process:

1. **Linting**: Upon opening a pull request, an automated linter will run to check for any coding style or formatting issues. If the linter fails, make the necessary corrections locally and push the changes to your branch. The linter should pass before requesting a code review.

2. **Conflict Resolution**: If there are conflicts with the target branch, reach out to the tech lead. They will assist you in resolving the conflicts and ensuring a smooth merge process.

3. **Code Review**: Once your pull request is ready for review, the reviewer will go through your code, providing feedback, suggestions, and identifying potential issues. Be responsive to the feedback and address any requested changes or improvements promptly.

4. **Collaborative Discussion**: Engage in a constructive and collaborative discussion with the reviewer. Ask questions, seek clarification, and discuss any areas of uncertainty or potential improvements. The goal is to ensure that the code meets the project's standards, best practices, and requirements.

5. **Iterative Refinement**: Make the necessary changes based on the feedback received during the code review. Update your branch, push the changes, and the pull request will be automatically updated. Notify the reviewer once the changes are made, and they will re-review the code.

**Step 4: Approval and Merge**

Once the reviewer approves the pull request and all requested changes have been addressed,A designated team lead will merge the code into the target branch.

> **Note:**: Never Merge Your Own Pull Requests.
