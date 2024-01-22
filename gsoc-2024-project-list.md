* [Java 21 Language Feature Support](#project-name-java-21-language-feature-support)
* [Automated Website Generation](#todo)
* [Refine Google Style Guide Implementation](#project-name-update-google-style-config-to-most-recent-content-of-style-guide-and-resolve-known-issues-with-modules-that-are-in-such-config)
* [Extend Checker Framework Integration](#todo)
* [Internal Tooling for Regression Testing](#project-name-regression-testing-tool-and-html-report-generator-for-pull-requests)
* [Enhance Mutation Testing Coverage](#project-name-pitest-resolution)
* [Eliminate Maven Plugin Usage](#project-name-eliminate-maven-plugin-usage)

***

### Project Name: Java 21 Language Feature Support

**Skills required**: Java, basic understanding of testing principles, basic understanding of static analysis

**Project goal**: Support static analysis of Java 21 language features

**Project size**: large

**Mentors**: Nick Mancuso, Roman Ivanov

**Description**:

Developers are enthusiastic about leveraging Java's latest language features, which offer more powerful, declarative,
and expressive code; these features
include [unnamed variables](https://openjdk.org/jeps/443), [record patterns](https://openjdk.org/jeps/440),
and [string templates](https://openjdk.org/jeps/430). However, Checkstyle currently lacks robust support for these
features. This project aims to bridge this gap by updating existing checks and potentially introducing new ones to
ensure thorough coverage of Java 21 syntax and conventions proposed by the JEPs associated with these language
advancements. The objective is to deliver comprehensive support for the new language features through revising check
modules, exhaustive testing, and detailed documentation updates. This effort not only aligns Checkstyle with
cutting-edge best practices in the Java community but also contributes to the project's ongoing evolution.

**Deliverables**:

- Analysis of new language features and possible static analysis coverage
- Check module updates
- Documentation improvements
- Establish best practices for new language features

***

### Project Name: Automated Website Generation

**Skills required**: Java, basic understanding of testing principles, technical writing, continuous integration

**Project goal**: organize documentation and automate its maintenance

**Project size**: medium

**Mentors**: Roman Ivanov, Nick Mancuso, Vyom Yadav

**Description**:

This project is designed to tackle the persistent challenge of
maintaining accurate and current documentation in our dynamic development environment. Acknowledging the limitations of
manual documentation processes, this initiative introduces automation to streamline content creation, with a focus on
ensuring consistent formats and robust verification checks. The project's goal is to provide users with reliable,
standardized, and regularly updated information while equipping contributors with templates and automated tools to
simplify the incorporation of details for new modules. By elevating documentation practices, this project aligns with
industry best practices, fostering clarity for both users and contributors within the Checkstyle project.

**Deliverables**:

- Resolution of edge cases in documentation generation
- Extend and make consistent all check usage examples
- Reduce/eliminate manual documentation updates for examples
- Introduce checks to ensure that all configuration options are covered in examples

***

### Project Name: Refine Google Style Guide Implementation

**Skills required**: Java, basic understanding of testing principles, basic understanding of static analysis

**Project goal**: improve quality of google style guide implementation

**Project size**: large

**Mentors**: Roman Ivanov, Richard Veach

**Description**:

Checkstyle boasts a robust implementation of
the [Google style](https://github.com/google/styleguide/commits/gh-pages/javaguide.html), well-documented on
our [coverage page](https://checkstyle.org/google_style.html) specifying the supported style version. To maintain
alignment with updates in the Google style guide, we aim to systematically review changes such
as [this commit](https://github.com/google/styleguide/commit/49488412b2f59843fce2433bd834a3fd9700604e) and adapt our
Checks configuration accordingly. Addressing reported defects and user issues regarding style guide mismatches is
pivotal. All concerns reported for Modules/Checks present in
the [Google Style config](https://github.com/checkstyle/checkstyle/blob/master/src/main/resources/google_checks.xml)
will be thoroughly reviewed, appropriately labeled for easy filtration, and promptly rectified. Conceptually, a
refactoring of our integration tests is imperative; transitioning from a per-module approach to a chapter-wise testing
methodology aligned with the guideline structure. By mapping chapter requirements to sets of modules loaded from
google_checks.xml, we can conduct comprehensive validations over input files, presenting a consolidated result.

**Deliverables**:

- Review and update Google Style config to most recent content of style guide
- Resolve known issues with modules
- Refactor integration tests to be chapter-wise
- Resolve all reported issues with Google Style config

***

### Project Name: Extend Checker Framework Integration

**Skills required**: Java, basic understanding of testing principles, basic understanding of Java type system

**Project goal**: Further usage of Checker Framework and increase internal knowledge base

**Project size**: large or medium

**Mentors**: Nick Mancuso, Roman Ivanov

**Description**:

The goal of this project is to advance the integration of the Checker Framework into our existing codebase, enhancing
code quality, correctness, and maintainability. In addition to refining the setup already present in our build, the
project will focus on incorporating the Checker Framework's type system into key components of our code and creating
comprehensive documentation and best practices to guide developers in utilizing the framework effectively.

**Deliverables**:

- Integrate Checker type system with codebase
- Refine existing build
- Develop internal documentation about our usage of Checker
- Provides examples, guidelines and best practices for developers to follow

***

### Project Name:Internal Tooling for Regression Testing

**Skills required**: Java, Groovy, BASH, continuous integration, basic understanding of testing principles

**Project goal**: 

**Project size**: medium

**Mentors**: Roman Ivanov, Nick Mancuso, Vyom Yadav

**Description**:

Checkstyle requires a dedicated tool for handling check regression testing based on changes in a pull request. This tool
must intelligently identify which check modules were altered in the pull request to conduct targeted testing, ensuring
the avoidance of bugs or loss of functionality. It should dynamically generate testing configurations (checkstyle
configuration files) based on the modified check modules and perform regression tests on the pull request code against
the master branch of Checkstyle across a specified project list. Subsequently, the tool should generate a comprehensive
check regression report, highlighting any differences in violations, and seamlessly share it within the pull request.
While there may be manually prepared configuration chunks for each module, the project emphasizes the need for full
automation, including the generation of configurations directly from the check modules themselves.

**Deliverables**:

- Internal tool for determining changed modules
- Internal tool for generating check configurations
- Integration testing
- Integration of new tools with existing report generation system
- Documentation, including examples

***

### Project Name: Enhance Mutation Testing Coverage

**Project goal**: reduce technical debt and improve code quality

**Skills required**: Java, basic understanding of testing principles

**Project size**: medium

**Mentors**: Roman Ivanov, Nick Mancuso, Vyom Yadav

**Description**:

Checkstyle has recently enriched its mutation testing suite with a set of
new [mutators](https://pitest.org/quickstart/mutators/) powered by [pitest](https://pitest.org/), a state-of-the-art
mutation testing system renowned for providing gold standard test coverage in Java and the JVM. This project focuses on
a meticulous review of suppressions employed within Checkstyle to manage pitest violations, aiming to identify
opportunities for new tests or adjustments to existing ones that can effectively resolve these suppressions. The
objective is to ensure the continued functional soundness of the code, potentially involving a deep dive into module
logic to facilitate test identification and contribute to the resolution of suppression-related issues.

**Deliverables**:

- Review of suppressions
- New tests or improvements to existing tests
- Resolution of 100% of existing suppressions
- Documentation, including examples

***

### Project Name: Eliminate Maven Plugin Usage

**Skills required**: Java, Groovy, Maven

**Project goal**: remove all usages of maven-checkstyle-plugin in our tools

**Project size**: medium

**Mentors**: Roman Ivanov, Nick Mancuso, Vyom Yadav

**Description**:

Checkstyle serves as a widely used library across various tools, with a notable dependency on
the [maven-checkstyle-plugin](https://maven.apache.org/plugins/maven-checkstyle-plugin/) for continuous integration and
regression testing. However, this reliance on an external tool has restricted our ability to introduce breaking changes
to the Checkstyle project, given the potential disruptions it causes in testing. Consequently, we've had to implement
workarounds to maintain the connection and dependence on the maven-checkstyle-plugin. To foster autonomy and minimize
dependencies, Checkstyle is undertaking efforts to break away from this plugin and shift towards relying solely on tools
under our maintenance. The list of connected issues below outlines specific areas that require modification to
facilitate this transition.

**Deliverables**:

 - Remove all usages of maven-checkstyle-plugin in our tools
 - Update documentation to reflect changes
 - Update build, CI, and regression testing to use internal tools exclusively

***
