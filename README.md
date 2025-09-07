# 배포 방법.

## 임시 워크트리로 gh-pages 체크아웃(없으면 orphan 브랜치 생성)
git worktree add /tmp/ghp gh-pages || git checkout --orphan gh-pages

## out/ 내용을 복사해 커밋/푸시
rm -rf /tmp/ghp/*
cp -R out/* /tmp/ghp/
cd /tmp/ghp
git add .
git commit -m "Deploy"
git push "https://arthallj:${GH_TOKEN}@github.com/arthallj/great-river.git" HEAD:gh-pages --force