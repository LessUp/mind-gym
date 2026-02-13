# Contributing

感谢你对本项目的关注！欢迎通过 Issue 和 Pull Request 参与贡献。

## 开发流程

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m "feat: add your feature"`
4. 推送分支：`git push origin feature/your-feature`
5. 创建 Pull Request

## 开发与测试

```bash
npm install
npm test            # 运行测试
npm run prepare:deploy  # 构建部署包
```

## 代码规范

- JavaScript 代码保持项目现有风格
- 使用 `.editorconfig` 中定义的缩进和格式规则
- 新增训练模式请附带基本测试或使用说明
- 更新 README 说明新功能的使用方法

## 提交信息格式

推荐使用 [Conventional Commits](https://www.conventionalcommits.org/)：

- `feat:` 新功能 / 新训练模式
- `fix:` 修复 Bug
- `docs:` 文档更新
- `style:` UI/样式调整
- `test:` 测试相关
