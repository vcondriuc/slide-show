# Slideshow Creator 🎬

A modern, open-source web application for creating beautiful video slideshows from your photos. Built with React, Vite, and FFmpeg.wasm for client-side video generation.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

### 📸 Photo Management
- **Drag & Drop Upload**: Easy photo upload with support for JPEG, JPG, PNG, and WEBP formats
- **Photo Reordering**: Drag and drop photos to change their order in the slideshow
- **Duration Control**: Set custom display duration for each photo (1-30 seconds)
- **Delete Photos**: Remove unwanted photos from your slideshow

### 🎨 Transition Effects
Choose from multiple transition effects between photos:
- Fade - Smooth fade transition
- Slide (Left/Right/Up/Down) - Dynamic sliding effects
- Wipe (Left/Right) - Professional wipe transitions
- Dissolve - Classic dissolve effect

### 📝 Text Overlays
- Add custom text overlays to your slideshow
- Customize font size (12-120px)
- Choose text color with color picker
- Set start and end times for text appearance
- Position text anywhere on the screen

### 💧 Watermark System
- Optional watermark on exported videos
- Support the project via "Buy Me a Coffee" to remove watermark
- Free for personal use with watermark

### 🎥 Video Export
- Generate MP4 videos directly in your browser using FFmpeg.wasm
- Real-time progress tracking
- 1920x1080 HD resolution
- 30 FPS output
- No server required - everything runs client-side!

### 🎯 Preview
- Live preview of your slideshow
- Play/Pause controls
- See exactly how your video will look

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vcondriuc/slide-show.git
cd slide-show
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Technology Stack

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **react-dropzone** - Drag and drop file upload
- **@dnd-kit/core & @dnd-kit/sortable** - Drag and drop sorting
- **@ffmpeg/ffmpeg & @ffmpeg/util** - Client-side video processing
- **FFmpeg.wasm** - WebAssembly port of FFmpeg

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx              # App header with branding
│   ├── PhotoUploader.jsx       # Drag & drop photo upload zone
│   ├── PhotoGrid.jsx           # Sortable grid of photos
│   ├── PhotoCard.jsx           # Individual photo card with controls
│   ├── TransitionPicker.jsx    # Transition effect selector
│   ├── TextOverlay.jsx         # Text overlay editor
│   ├── WatermarkNotice.jsx     # Watermark info and removal
│   ├── VideoPreview.jsx        # Live slideshow preview
│   └── ExportButton.jsx        # Video export with progress
├── hooks/
│   ├── usePhotoManager.js      # Photo management logic
│   ├── useTextOverlay.js       # Text overlay management
│   └── useVideoExport.js       # Video export with FFmpeg
├── utils/
│   ├── transitions.js          # Transition configurations
│   └── ffmpegCommands.js       # FFmpeg command builders
├── App.jsx                     # Main application component
├── main.jsx                    # Application entry point
└── index.css                   # Global styles with Tailwind
```

## 🎯 Usage Guide

### 1. Upload Photos
- Drag and drop photos onto the upload zone
- Or click to select files from your computer
- Supported formats: JPEG, JPG, PNG, WEBP

### 2. Arrange Photos
- Drag photos to reorder them
- Set individual durations for each photo
- Remove unwanted photos with the delete button

### 3. Configure Transitions
- Select a transition effect from the list
- The transition applies between all photos

### 4. Add Text Overlays (Optional)
- Click "Add Text" to create a new overlay
- Customize text, size, color, and timing
- Position text using percentage-based coordinates

### 5. Preview Your Slideshow
- Click the "Play" button to see a preview
- Verify the order, timing, and text placement

### 6. Export to Video
- Review the watermark notice
- Click "Export to Video" to start processing
- Wait for the progress bar to complete
- Your video will automatically download

## ⚡ Performance Tips

- FFmpeg.wasm is loaded on-demand for better performance
- The app uses WASM cross-origin isolation headers
- Photos are processed client-side - no uploads to servers
- Large projects may take several minutes to export

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- FFmpeg.wasm team for making video processing in the browser possible
- The React and Vite communities
- All contributors and supporters

## 📧 Contact

Project Link: [https://github.com/vcondriuc/slide-show](https://github.com/vcondriuc/slide-show)

---

Made with ❤️ by the open-source community