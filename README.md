# 🌐 AI Text Classifier – Çok Dilli Metin Sınıflandırma

This project uses Hugging Face's zero-shot classification model to categorize user-provided text based on given labels. It works with both Turkish and English text.

Bu proje, kullanıcıdan alınan metni ve etiketleri kullanarak Hugging Face API ile metni sınıflandırır. Hem Türkçe hem İngilizce metinlerle çalışır.

## 🚀 Features

- ✅ Hugging Face classification with `facebook/bart-large-mnli` model
- 🗣️ Turkish and English language support
- 🔍 Multi-label support
- ⚡ Next.js 14 + App Router structure
- 🎨 Simple and responsive design with Tailwind CSS

## 🚀 Özellikler

- ✅ Hugging Face `facebook/bart-large-mnli` modeliyle sınıflandırma
- 🗣️ Türkçe ve İngilizce dil desteği
- 🔍 Çoklu etiket desteği
- ⚡ Next.js 14 + App Router yapısı
- 🎨 Tailwind CSS ile sade ve responsive tasarım

---

## 🧪 Example

### Input:

Text: The most important truth of life is sincerity...
Tags: life, literature, hope

### Output: 

life: 60.63%
literature: 31.68%
hope: 7.69%

## 🧪 Örnek Kullanım

### Girdi:

Metin: Hayatın en önemli gerçeği samimiliktir...
Etiketler: hayat, edebiyat, umut

### Sonuç: 

hayat: 60.63%
edebiyat: 31.68%
umut: 7.69%

## 🛠️ Kurulum / Installation

```bash
git clone https://github.com/m-nordo/next-ai-text-classifier.git
cd next-ai-text-classifier
npm install
```
