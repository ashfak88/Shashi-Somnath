import React, { useRef, useEffect, useState, useCallback } from 'react';

const MAPS_URL = 'https://share.google/eQxPOW2qwpx2CBa8y';
const VENUE_NAME = 'Wedding bells, S K Mohit Palace';
const VENUE_ADDRESS = 'Jhilmil Industrial Area, Behind Jhilmil Metro Station, New Delhi-92';

export default function VenueScratchCard() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);

  // Draw the luxury gold foil on the canvas
  const drawFoil = useCallback((canvas) => {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Metallic gold foil gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#d4a62a');
    grad.addColorStop(0.25, '#fce588');
    grad.addColorStop(0.5, '#c9941e');
    grad.addColorStop(0.75, '#ffeaa7');
    grad.addColorStop(1, '#9a6b0c');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Subtle decorative border inside foil
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.lineWidth = 2;
    ctx.strokeRect(12, 12, width - 24, height - 24);

    ctx.strokeStyle = 'rgba(120, 75, 5, 0.35)';
    ctx.lineWidth = 1;
    ctx.strokeRect(16, 16, width - 32, height - 32);

    // Subtle sparkle stars pattern
    ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.font = '16px serif';
    const sparkles = [
      [28, 32], [width - 32, 34], [34, height - 28], [width - 36, height - 30],
      [width * 0.25, 28], [width * 0.75, 28], [width * 0.25, height - 24], [width * 0.75, height - 24]
    ];
    sparkles.forEach(([x, y]) => {
      ctx.fillText('✦', x, y);
    });

    // Scratch Card Instruction Badge
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Medallion circle behind coin/text
    ctx.beginPath();
    ctx.arc(width / 2, height / 2 - 20, 32, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.28)';
    ctx.fill();
    ctx.strokeStyle = '#fff8d8';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Sparkle icon
    ctx.font = '28px sans-serif';
    ctx.fillText('✨', width / 2, height / 2 - 20);

    // Main Instruction text
    ctx.fillStyle = '#2b1a00';
    ctx.font = 'bold 15px "Playfair Display", Georgia, serif';
    ctx.fillText('TAP & SCRATCH TO REVEAL', width / 2, height / 2 + 28);

    // Subtitle
    ctx.fillStyle = '#5c3a03';
    ctx.font = '11px "Lato", sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('CELEBRATION VENUE', width / 2, height / 2 + 48);

    ctx.fillStyle = 'rgba(92, 58, 3, 0.85)';
    ctx.font = 'italic 10px "Lato", sans-serif';
    ctx.fillText('Rub with finger or mouse', width / 2, height / 2 + 66);
  }, []);

  // Initialize canvas with proper DPI
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    drawFoil(canvas);
  }, [drawFoil]);

  // Scratch action
  const scratch = useCallback((clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();

    // Calculate scratched percentage periodically
    if (Math.random() < 0.2) {
      try {
        const dpr = window.devicePixelRatio || 1;
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        let transparentPixels = 0;
        const totalSampled = data.length / 16; // sample every 4th pixel (RGBA = 4 bytes * 4 = 16)
        for (let i = 3; i < data.length; i += 16) {
          if (data[i] === 0) transparentPixels++;
        }
        const pct = Math.round((transparentPixels / totalSampled) * 100);
        setScratchPercent(pct);

        // Auto-reveal if more than 35% is cleared
        if (pct >= 35) {
          setIsRevealed(true);
        }
      } catch {
        // Fallback if image data sampling fails
      }
    }
  }, [isRevealed]);

  const handlePointerDown = (e) => {
    setIsScratching(true);
    scratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    if (!isScratching) return;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    setIsScratching(false);
  };

  const revealInstantly = () => {
    setIsRevealed(true);
  };

  const copyAddress = () => {
    navigator.clipboard?.writeText?.(`${VENUE_NAME}, ${VENUE_ADDRESS}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="scratch-venue-outer">
      <div className="scratch-card-header">
        <span className="scratch-badge">✦ GOLDEN REVELATION ✦</span>
        <h3 className="scratch-heading">Celebration Venue</h3>
        <p className="scratch-sub">Scratch the golden foil below to unveil where we will celebrate!</p>
      </div>

      <div
        ref={containerRef}
        className={`scratch-card-container ${isRevealed ? 'revealed' : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* Layer 1: Revealed Venue Content (Underneath) */}
        <div className="scratch-revealed-content">
          <div className="venue-crest-badge">
            <span className="crest-icon">📍</span>
            <span className="crest-text">VENUE CONFIRMED</span>
          </div>

          <h4 className="venue-palace-title">{VENUE_NAME}</h4>
          <p className="venue-palace-address">{VENUE_ADDRESS}</p>

          <div className="venue-meta-pills">
            <span className="meta-pill">📅 Sunday, 22 Nov 2026</span>
            <span className="meta-pill">⏰ 12:00 PM Onwards</span>
          </div>

          <div className="venue-action-buttons">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn scratch-maps-btn"
            >
              ✦ Open Exact Location on Google Maps
            </a>

            <button
              type="button"
              onClick={copyAddress}
              className="outline-btn scratch-copy-btn"
            >
              {copied ? '✓ Address Copied!' : '📋 Copy Address'}
            </button>
          </div>
        </div>

        {/* Layer 2: Scratch Foil Canvas (On Top) */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            className="scratch-canvas"
            style={{ touchAction: 'none' }}
          />
        )}
      </div>

      {/* Helper controls below */}
      <div className="scratch-card-footer">
        {!isRevealed ? (
          <div className="scratch-status-row">
            <span className="scratch-hint">
              {scratchPercent > 0 ? `${scratchPercent}% revealed — keep scratching!` : '👆 Scratch above with your finger or mouse'}
            </span>
            <button
              type="button"
              onClick={revealInstantly}
              className="scratch-instant-btn"
            >
              ✨ Unveil Venue Immediately
            </button>
          </div>
        ) : (
          <div className="scratch-celebrate-note">
            <span>🎉 Venue Unveiled! We look forward to welcoming you with joy.</span>
          </div>
        )}
      </div>
    </div>
  );
}

