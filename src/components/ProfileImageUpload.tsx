import { useState, useRef } from 'react';
import { Camera, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProfileImageUploadProps {
  currentImage?: string;
  onImageChange: (imageUrl: string) => void;
  className?: string;
}

const ProfileImageUpload = ({ currentImage, onImageChange, className = "" }: ProfileImageUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Please select an image smaller than 5MB');
      return;
    }

    setIsUploading(true);

    // Convert to base64 for local storage
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      // Store in localStorage for persistence
      localStorage.setItem('profileImage', imageUrl);
      onImageChange(imageUrl);
      setIsUploading(false);
    };
    reader.onerror = () => {
      alert('Error reading file');
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`relative group ${className}`}>
      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-all duration-300 float-element cursor-pointer">
        {currentImage ? (
          <img 
            src={currentImage} 
            alt="Joseph Muriithi" 
            className="w-full h-full object-cover"
            onClick={triggerFileInput}
          />
        ) : (
          <div 
            className="w-full h-full bg-gradient-primary flex items-center justify-center text-6xl font-bold text-primary-foreground cursor-pointer"
            onClick={triggerFileInput}
          >
            JM
          </div>
        )}
        
        {/* Upload overlay */}
        <div 
          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={triggerFileInput}
        >
          {isUploading ? (
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          ) : (
            <Camera className="h-8 w-8 text-white" />
          )}
        </div>
      </div>

      {/* Upload Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={triggerFileInput}
        disabled={isUploading}
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rounded-full px-3 py-1 text-xs"
      >
        <Upload className="h-3 w-3 mr-1" />
        {isUploading ? 'Uploading...' : 'Upload'}
      </Button>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
};

export default ProfileImageUpload;