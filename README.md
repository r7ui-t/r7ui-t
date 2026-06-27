### Hi there 👋

<p>基本プライベート</p>
<p align="left">
  <a href="https://github.com/r7ui-t/r7ui-t/">
    <img src="https://komarev.com/ghpvc/?username=r7ui-t" alt="r1-pQ" />
  </a>
  <a href="https://github.com/r7ui-t">
    <img height="20" src="https://img.shields.io/github/followers/r7ui-t?label=follow&logo=github&style=flat" />
  </a>
</p>

name: Waka Readme

on:
  # for manual workflow trigger
  workflow_dispatch:
  schedule:
    # runs at 12 AM UTC (5:30 AM IST)
    - cron: "0 0 * * *"

jobs:
  update-readme:
    name: WakaReadme DevMetrics
    runs-on: ubuntu-latest
    steps:
      - uses: athul/waka-readme@master # this action name
        with:
          WAKATIME_API_KEY: ${{ secrets.WAKATIME_API_KEY }}
