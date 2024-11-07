# 자바스크립트 프로그래밍 10주차 과제

이번 과제는 다음 세 가지 AI 모델을 활용하여 함수에 관련된 프로그램 예제 코드 30개를 작성하였습니다.

## 사용된 AI 모델

1. `GPT-4o` by OpenAI

2. `Claude 3.5 Sonnet` by Anthropic

3. `Sonar Huge` by Perplexity
    - 이 모델은 Perplexity를 기반으로 Llama 3.1 405B에 의해 훈련되었습니다.

## 사용 프롬프트

각 모델에 대해 다음과 같은 프롬프트를 사용하였습니다.

```plaintext
Generate 30 different JavaScript example codes about functions.
- Write a code that is clean and creative that would make a major swoon and applaud.
- Make the outputs are easily distinguishable and it's easy to see which code was executed.
- Write comments describing what code it is.
- Write it on a single file
```

## 코드 분석

- `GPT-4o`는 가장 깔끔한 출력값을 생성하였습니다. 코드의 주석이나 코드의 내용을 잘 이해하고 있는 것 같습니다.

- 반면 `Claude 3.5 Sonnet`과 `Sonar Huge`는 출력값의 순서에 문제가 있었으나, 작성한 각 함수는 전체적으로 깔끔하게 생성되었습니다.

- 종합적으로 세 모델 모두 함수에 관련된 코드를 잘 생성하였습니다.

## 결론

현재의 AI 모델의 코딩 실력은 짧은 길이의 코드를 생성하는 데에는 어느 정도 능숙하다고 볼 수 있습니다. 하지만, 프롬프트와 코드의 길이가 길어지거나 복잡해지면 **환각(hallucination)** 현상을 보이며 AI 모델의 성능이 떨어지는 것을 확인할 수 있었습니다. 따라서, AI 모델을 사용하여 코드를 생성할 때에는 Copilot 이라는 이름처럼 도우미의 역할로 참고하거나 생성하려는 코드의 길이와 복잡도를 고려하여 사용하는 것이 중요하다고 생각합니다.
