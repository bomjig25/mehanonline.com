window.MODEL_DATA = {
  "meta": {
    "title": "China Frontier Model Monitor",
    "updated": "2026-07-26",
    "methodology": "Technical specifications are taken from official developer documentation, company announcements, or official model repositories. Editorial strength scores are directional, not benchmark composites.",
    "sources_checked": 10
  },
  "models": [
    {
      "id": "kimi-k3",
      "model": "Kimi K3",
      "company": "Moonshot AI",
      "country": "China",
      "released": "2026-07-16",
      "context": 1000000,
      "max_output": 128000,
      "parameters": "2.8T total",
      "architecture": "Mixture of Experts; details pending technical report",
      "access": "API; open weights announced",
      "modalities": [
        "Text",
        "Image",
        "Code"
      ],
      "features": [
        "Always-on reasoning",
        "Configurable reasoning effort",
        "Tool calling",
        "Long-horizon agents",
        "Native multimodality"
      ],
      "strengths": [
        "Long-horizon coding",
        "Knowledge work",
        "Deep reasoning",
        "Multimodal understanding"
      ],
      "scores": {
        "reasoning": 97,
        "coding": 97,
        "agents": 97,
        "multimodal": 93,
        "efficiency": 79
      },
      "source": "https://platform.moonshot.ai/docs/guide/kimi-k3-quickstart",
      "source_label": "Moonshot AI Kimi K3 documentation",
      "verified": true
    },
    {
      "id": "glm-5-2",
      "model": "GLM-5.2",
      "company": "Z.ai / Zhipu AI",
      "country": "China",
      "released": "2026-06-16",
      "context": 1000000,
      "max_output": null,
      "parameters": "Not disclosed",
      "architecture": "Not disclosed",
      "access": "Hosted API",
      "modalities": [
        "Text",
        "Code"
      ],
      "features": [
        "Long-horizon tasks",
        "Tool use",
        "Coding agents",
        "1M-token context"
      ],
      "strengths": [
        "Agentic coding",
        "Long-context work",
        "Repository tasks",
        "Tool use"
      ],
      "scores": {
        "reasoning": 94,
        "coding": 97,
        "agents": 98,
        "multimodal": 48,
        "efficiency": 86
      },
      "source": "https://z.ai/blog/glm-5.2",
      "source_label": "Z.ai official GLM-5.2 announcement",
      "verified": true
    },
    {
      "id": "minimax-m3",
      "model": "MiniMax M3",
      "company": "MiniMax",
      "country": "China",
      "released": "2026-06-01",
      "context": 1000000,
      "max_output": null,
      "parameters": "Not disclosed",
      "architecture": "MiniMax Sparse Attention",
      "access": "API / hosted",
      "modalities": [
        "Text",
        "Image",
        "Video",
        "Code"
      ],
      "features": [
        "Native multimodality",
        "Computer use",
        "Agentic work",
        "Long-video understanding",
        "1M-token API context"
      ],
      "strengths": [
        "Coding",
        "Agents",
        "Long context",
        "Multimodality"
      ],
      "scores": {
        "reasoning": 93,
        "coding": 96,
        "agents": 97,
        "multimodal": 96,
        "efficiency": 87
      },
      "source": "https://www.minimax.io/blog/minimax-m3",
      "source_label": "MiniMax official M3 announcement",
      "verified": true
    },
    {
      "id": "ernie-5-1",
      "model": "ERNIE 5.1",
      "company": "Baidu",
      "country": "China",
      "released": "2026-05-09",
      "context": null,
      "max_output": null,
      "parameters": "Not disclosed",
      "architecture": "Elastic MoE-derived model",
      "access": "Hosted",
      "modalities": [
        "Text",
        "Image"
      ],
      "features": [
        "Agentic post-training",
        "Search",
        "Creative writing",
        "Tool-assisted reasoning"
      ],
      "strengths": [
        "World knowledge",
        "Creative writing",
        "Reasoning",
        "Search agents"
      ],
      "scores": {
        "reasoning": 93,
        "coding": 87,
        "agents": 92,
        "multimodal": 76,
        "efficiency": 91
      },
      "source": "https://ernie.baidu.com/blog/posts/ernie-5.1-0508-release/",
      "source_label": "Baidu ERNIE official blog",
      "verified": true
    },
    {
      "id": "deepseek-v4-pro",
      "model": "DeepSeek V4 Pro",
      "company": "DeepSeek",
      "country": "China",
      "released": "2026-04-24",
      "context": 1000000,
      "max_output": 384000,
      "parameters": "1.6T total / 49B active",
      "architecture": "Mixture of Experts",
      "access": "API + open weights preview",
      "modalities": [
        "Text",
        "Code"
      ],
      "features": [
        "Thinking mode",
        "Tool calls",
        "JSON output",
        "FIM",
        "Context caching"
      ],
      "strengths": [
        "Reasoning",
        "Coding",
        "Agents",
        "Long context"
      ],
      "scores": {
        "reasoning": 96,
        "coding": 95,
        "agents": 95,
        "multimodal": 42,
        "efficiency": 92
      },
      "source": "https://api-docs.deepseek.com/news/news260424/",
      "source_label": "DeepSeek V4 official release",
      "verified": true
    },
    {
      "id": "deepseek-v4-flash",
      "model": "DeepSeek V4 Flash",
      "company": "DeepSeek",
      "country": "China",
      "released": "2026-04-24",
      "context": 1000000,
      "max_output": 384000,
      "parameters": "284B total / 13B active",
      "architecture": "Mixture of Experts",
      "access": "API + open weights preview",
      "modalities": [
        "Text",
        "Code"
      ],
      "features": [
        "Fast inference",
        "Thinking and non-thinking modes",
        "Tool calls",
        "Context caching"
      ],
      "strengths": [
        "Efficiency",
        "Coding",
        "Long context",
        "API economics"
      ],
      "scores": {
        "reasoning": 91,
        "coding": 92,
        "agents": 91,
        "multimodal": 38,
        "efficiency": 98
      },
      "source": "https://api-docs.deepseek.com/news/news260424/",
      "source_label": "DeepSeek V4 official release",
      "verified": true
    },
    {
      "id": "qwen-3-6-plus",
      "model": "Qwen 3.6 Plus",
      "company": "Alibaba Cloud",
      "country": "China",
      "released": "2026-04-09",
      "context": 200000,
      "max_output": 64000,
      "parameters": "Not disclosed",
      "architecture": "Not disclosed",
      "access": "Qwen Code / hosted",
      "modalities": [
        "Text",
        "Code"
      ],
      "features": [
        "Coding agent",
        "Tool use",
        "Terminal workflow",
        "Adaptive output tokens"
      ],
      "strengths": [
        "Coding",
        "Developer agents",
        "Tool use",
        "Workflow automation"
      ],
      "scores": {
        "reasoning": 92,
        "coding": 96,
        "agents": 96,
        "multimodal": 46,
        "efficiency": 90
      },
      "source": "https://qwenlm.github.io/qwen-code-docs/en/blog/weekly-update-2026-04-09/",
      "source_label": "Qwen Code official launch update",
      "verified": true
    },
    {
      "id": "minimax-m2-7",
      "model": "MiniMax M2.7",
      "company": "MiniMax",
      "country": "China",
      "released": "2026-03-18",
      "context": 200000,
      "max_output": null,
      "parameters": "Not disclosed",
      "architecture": "Not disclosed",
      "access": "API / hosted",
      "modalities": [
        "Text",
        "Code"
      ],
      "features": [
        "Recursive self-improvement research",
        "Coding",
        "Tool use",
        "Long-horizon agent workflows"
      ],
      "strengths": [
        "Coding",
        "Agentic research",
        "Tool use",
        "Workflow execution"
      ],
      "scores": {
        "reasoning": 92,
        "coding": 95,
        "agents": 96,
        "multimodal": 55,
        "efficiency": 91
      },
      "source": "https://www.minimax.io/news/minimax-m27-en",
      "source_label": "MiniMax official M2.7 announcement",
      "verified": true
    },
    {
      "id": "qwen3-coder-480b",
      "model": "Qwen3-Coder 480B-A35B",
      "company": "Alibaba Cloud",
      "country": "China",
      "released": "2025-07-22",
      "context": 256000,
      "extended_context": 1000000,
      "max_output": null,
      "parameters": "480B total / 35B active",
      "architecture": "Mixture of Experts",
      "access": "Open weights + API",
      "modalities": [
        "Text",
        "Code"
      ],
      "features": [
        "Agentic coding",
        "Browser use",
        "Tool use",
        "1M extrapolated context"
      ],
      "strengths": [
        "Coding",
        "Browser agents",
        "Tool use",
        "Open deployment"
      ],
      "scores": {
        "reasoning": 88,
        "coding": 95,
        "agents": 94,
        "multimodal": 38,
        "efficiency": 90
      },
      "source": "https://qwenlm.github.io/blog/qwen3-coder/",
      "source_label": "Qwen official blog",
      "verified": true
    },
    {
      "id": "deepseek-v3-2",
      "model": "DeepSeek V3.2",
      "company": "DeepSeek",
      "country": "China",
      "released": "2025-12-01",
      "context": 128000,
      "max_output": null,
      "parameters": "Not disclosed",
      "architecture": "Sparse-attention model",
      "access": "API + open weights",
      "modalities": [
        "Text",
        "Code"
      ],
      "features": [
        "Thinking during tool use",
        "Non-thinking tool use",
        "Agent workflows",
        "Context caching"
      ],
      "strengths": [
        "Reasoning",
        "Tool use",
        "Coding",
        "Open deployment"
      ],
      "scores": {
        "reasoning": 92,
        "coding": 91,
        "agents": 93,
        "multimodal": 36,
        "efficiency": 94
      },
      "source": "https://api-docs.deepseek.com/news/news251201",
      "source_label": "DeepSeek V3.2 official release",
      "verified": true
    }
  ]
};
