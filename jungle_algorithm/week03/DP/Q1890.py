#1890_점프
N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]

# dp생성 및 초기값 설정
dp = [[0]*N for _ in range(N)]
dp[0][0]=1

for i in range(N):
    for j in range(N):
        # 경로가 있고, 점프 숫자가 있는 경우
        if dp[i][j]>0 and arr[i][j]>0:
            jump = arr[i][j]
            if j+jump<N:        # 우측: 범위이내인 경우
                dp[i][j+jump] += dp[i][j]
            if i + jump < N:    # 아래쪽: 범위이내인 경우
                dp[i+jump][j] += dp[i][j]
print(dp[N-1][N-1])