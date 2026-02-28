```markdown
# AGENTS.md - AI Coding Agent Guidelines

These guidelines outline the principles and rules for development of AI coding agents within this repository. Adherence to these principles is crucial for maintaining code quality, stability, and maintainability.

## 1. DRY (Don't Repeat Yourself)

*   All logic and implementation details must be encapsulated within individual functions and classes.
*   Avoid duplicate code blocks.
*   Refactor duplicate code into reusable components.
*   When a task is repeated, create a reusable function/class.

## 2. KISS (Keep It Simple, Stupid)

*   Strive for the simplest possible solution.
*   Avoid unnecessary complexity.
*   Favor readability and clarity over cleverness.
*   Each function/class should have a single, well-defined purpose.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class/function should have one, and only one, reason to change.
*   **Open/Closed Principle:**  The system should be extensible through mechanisms like interfaces or plugins, without modifying the core logic.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Clients should not be forced to depend on methods they do not use.
*   **Dependency Inversion Principle:** High-level modules should not depend on low-level modules; they should depend on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   Implement only what is absolutely necessary for the current task.
*   Avoid premature optimization.
*   Focus on delivering working functionality first.
*   Refactor only when a significant improvement in functionality is achieved.

## 5. Code Style & Formatting

*   Use a consistent code style (e.g., PEP 8, Google Style).
*   Employ a code formatter (e.g., Prettier, Black) to enforce formatting rules.
*   Use consistent indentation and whitespace.
*   Comment code where necessary, but avoid excessive comments.

## 6. Testing & Coverage

*   All code must be thoroughly tested.
*   Test coverage must be at least 80%.
*   Utilize a testing framework (e.g., pytest, unittest) to define and run tests.
*   Tests should cover all critical scenarios and edge cases.
*   Test cases should be designed to isolate and verify specific functionalities.

## 7. File Size Limit: 180 Lines

*   Each file should not exceed 180 lines of code.
*   Code should be structured logically and efficiently to stay within this limit.

## 8.  Documentation (Inline Comments & JSDoc)

*   Use JSDoc comments for all functions and classes to explain their purpose, parameters, and return values.
*   Provide clear and concise inline comments to explain complex logic or assumptions.

## 9.  Error Handling**

*   All functions should handle potential errors gracefully.
*   Implement logging to record errors and warnings.
*   Use exceptions where appropriate to signal errors.

## 10. Repository Structure

*   Organize code into logical modules and packages.
*   Use a clear and consistent directory structure.
*   Implement a well-defined `tests` directory to store test files.

## 11. Production-Ready Code

*   Code should be written with production deployment in mind.
*   Consider performance and scalability considerations.
*   Ensure code is resistant to refactoring.

## 12.  Version Control

*   Use a version control system (e.g., Git) to track changes to the codebase.
*   Commit frequently with meaningful commit messages.
*   Establish a branching strategy to manage different features.

## 13.  Data Dependencies**

*   Dependencies should be explicitly declared in the code with clear purpose and documentation.
*   Dependencies should be easily testable and verifiable.

## 14.  Modular Design**

*   Design modules with a single responsibility.
*   Each module should be self-contained and easily reusable.

## 15.  Maintainability**

*   Write code that is easy to understand and maintain.
*   Use consistent naming conventions.
*   Provide clear and concise documentation.

These guidelines will help ensure the development of high-quality, maintainable AI coding agents within the AGENTS.md repository.
```