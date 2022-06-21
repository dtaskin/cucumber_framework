Feature: Wiki Search Functionality

  @Wiki
    #IF you want to run same script multiple times, we use scenario outline
  Scenario Outline: Validate Wiki Search
    Given user navigates to "https://www.wikipedia.org/"
    When user searches for "<key>" on Wikipedia
    Then user should see "<key>" in the title
    And user should see "<key>" in the url
    And user should see "<key>" in the first heading
    Examples:
      | key              |
      | Elon Musk        |
      | Bill Gates       |
      | Johny Depp       |
      | Post Malone      |
      | Jack Harlow      |
      | Lil Baby         |
      | bob the builder  |
      | Jennifer Lopez   |
      | Robert downey jr |
#      | Irina Shayk      |
#      | Kobe Bryant      |
#      | Piero Manzoni    |