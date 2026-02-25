import React, { useState, useEffect } from "react";
import { LandingPageBlock } from "./types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface ElementContentPanelProps {
  block: LandingPageBlock | null;
  selectedElement: "heading" | "subheading" | "button" | null;
  onElementSelect: (element: null) => void;
  onBlockUpdate: (blockId: string, properties: Record<string, any>) => void;
  blockId?: string;
}

export const ElementContentPanel: React.FC<ElementContentPanelProps> = ({
  block,
  selectedElement,
  onElementSelect,
  onBlockUpdate,
  blockId,
}) => {
  const [localProps, setLocalProps] = useState<Record<string, any>>({});

  useEffect(() => {
    if (block) {
      setLocalProps(block.properties || {});
    }
  }, [block?.id]);

  if (!block || !selectedElement) {
    return null;
  }

  const updateProperty = (key: string, value: any) => {
    const updated = { ...localProps, [key]: value };
    setLocalProps(updated);
    if (blockId) {
      onBlockUpdate(blockId, updated);
    }
  };

  const renderElementContent = () => {
    const props = block.properties || {};

    switch (selectedElement) {
      case "heading":
        return (
          <div className="space-y-4">
            <div>
              <Label className="text-xs font-semibold text-gray-700 mb-2 block">
                Heading Text
              </Label>
              <Input
                type="text"
                value={
                  props.headline ||
                  props.heading ||
                  props.title ||
                  ""
                }
                onChange={(e) => {
                  const key = props.headline !== undefined
                    ? "headline"
                    : props.heading !== undefined
                    ? "heading"
                    : "title";
                  updateProperty(key, e.target.value);
                }}
                placeholder="Enter heading text"
                className="focus:ring-valasys-orange focus:ring-2"
              />
            </div>

            <div>
              <Label className="text-xs font-semibold text-gray-700 mb-2 block">
                Heading Color
              </Label>
              <div className="flex gap-2">
                <Input
                  type="color"
                  value={props.headlineColor || props.headingColor || "#1f2937"}
                  onChange={(e) => {
                    const key = props.headlineColor !== undefined
                      ? "headlineColor"
                      : "headingColor";
                    updateProperty(key, e.target.value);
                  }}
                  className="w-12 h-10 cursor-pointer"
                />
                <Input
                  type="text"
                  value={props.headlineColor || props.headingColor || "#1f2937"}
                  onChange={(e) => {
                    const key = props.headlineColor !== undefined
                      ? "headlineColor"
                      : "headingColor";
                    updateProperty(key, e.target.value);
                  }}
                  className="flex-1 focus:ring-valasys-orange focus:ring-2"
                />
              </div>
            </div>

            <div>
              <Label className="text-xs font-semibold text-gray-700 mb-2 block">
                Font Size
              </Label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={props.headlineFontSize || "32px"}
                  onChange={(e) => updateProperty("headlineFontSize", e.target.value)}
                  placeholder="32px, 2rem, etc."
                  className="flex-1 focus:ring-valasys-orange focus:ring-2"
                />
              </div>
            </div>
          </div>
        );

      case "subheading":
        return (
          <div className="space-y-4">
            <div>
              <Label className="text-xs font-semibold text-gray-700 mb-2 block">
                Subheading Text
              </Label>
              <Input
                type="text"
                value={props.subheading || ""}
                onChange={(e) => updateProperty("subheading", e.target.value)}
                placeholder="Enter subheading text"
                className="focus:ring-valasys-orange focus:ring-2"
              />
            </div>

            <div>
              <Label className="text-xs font-semibold text-gray-700 mb-2 block">
                Subheading Color
              </Label>
              <div className="flex gap-2">
                <Input
                  type="color"
                  value={props.subheadingColor || "#4b5563"}
                  onChange={(e) => updateProperty("subheadingColor", e.target.value)}
                  className="w-12 h-10 cursor-pointer"
                />
                <Input
                  type="text"
                  value={props.subheadingColor || "#4b5563"}
                  onChange={(e) => updateProperty("subheadingColor", e.target.value)}
                  className="flex-1 focus:ring-valasys-orange focus:ring-2"
                />
              </div>
            </div>

            <div>
              <Label className="text-xs font-semibold text-gray-700 mb-2 block">
                Font Size
              </Label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={props.subheadingFontSize || "18px"}
                  onChange={(e) => updateProperty("subheadingFontSize", e.target.value)}
                  placeholder="18px, 1.2rem, etc."
                  className="flex-1 focus:ring-valasys-orange focus:ring-2"
                />
              </div>
            </div>
          </div>
        );

      case "button":
        return (
          <div className="space-y-4">
            <div>
              <Label className="text-xs font-semibold text-gray-700 mb-2 block">
                Button Text
              </Label>
              <Input
                type="text"
                value={props.ctaButtonText || ""}
                onChange={(e) => updateProperty("ctaButtonText", e.target.value)}
                placeholder="Enter button text"
                className="focus:ring-valasys-orange focus:ring-2"
              />
            </div>

            <div>
              <Label className="text-xs font-semibold text-gray-700 mb-2 block">
                Button URL
              </Label>
              <Input
                type="text"
                value={props.ctaButtonUrl || ""}
                onChange={(e) => updateProperty("ctaButtonUrl", e.target.value)}
                placeholder="https://example.com"
                className="focus:ring-valasys-orange focus:ring-2"
              />
            </div>

            <div>
              <Label className="text-xs font-semibold text-gray-700 mb-2 block">
                Button Background Color
              </Label>
              <div className="flex gap-2">
                <Input
                  type="color"
                  value={props.ctaButtonColor || "#FF6A00"}
                  onChange={(e) => updateProperty("ctaButtonColor", e.target.value)}
                  className="w-12 h-10 cursor-pointer"
                />
                <Input
                  type="text"
                  value={props.ctaButtonColor || "#FF6A00"}
                  onChange={(e) => updateProperty("ctaButtonColor", e.target.value)}
                  className="flex-1 focus:ring-valasys-orange focus:ring-2"
                />
              </div>
            </div>

            <div>
              <Label className="text-xs font-semibold text-gray-700 mb-2 block">
                Button Text Color
              </Label>
              <div className="flex gap-2">
                <Input
                  type="color"
                  value={props.ctaButtonTextColor || "#ffffff"}
                  onChange={(e) => updateProperty("ctaButtonTextColor", e.target.value)}
                  className="w-12 h-10 cursor-pointer"
                />
                <Input
                  type="text"
                  value={props.ctaButtonTextColor || "#ffffff"}
                  onChange={(e) => updateProperty("ctaButtonTextColor", e.target.value)}
                  className="flex-1 focus:ring-valasys-orange focus:ring-2"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white border-l border-gray-200 h-full flex flex-col overflow-hidden">
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-2 flex-shrink-0">
        <Button
          size="sm"
          variant="ghost"
          className="h-8 w-8 p-0"
          onClick={() => onElementSelect(null)}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <h3 className="font-semibold text-gray-900 text-sm capitalize">
          {selectedElement} Content
        </h3>
      </div>
      <div className="p-4 overflow-y-auto flex-1">{renderElementContent()}</div>
    </div>
  );
};
