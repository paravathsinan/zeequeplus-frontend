"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  User, Users, BookOpen, Check, ChevronRight, ChevronLeft, ChevronDown, Calendar,
  Sun, Sunset, Moon, AlertCircle, Loader2, Sparkles, CreditCard, Lock, ShieldCheck
} from "lucide-react";

/* ── Types ── */
interface FormData {
  studentName: string;
  dateOfBirth: string;
  gender: string;
  grade: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  parentWhatsapp: string;
  parentRelationship: string;
  countryOfResidence: string;
  interestedProgram: string;
  heardFrom: string;
  aadhaarNumber: string;
  hasCompletedPreschool: boolean;
  batchTiming: string;
  agreeTerms: boolean;
}

interface FieldErrors {
  [key: string]: string;
}

/* ── Constants ── */
const STEPS = [
  { label: "Student Profile", icon: User },
  { label: "Parent Details", icon: Users },
  { label: "Program Selection", icon: BookOpen },
  { label: "Payment", icon: CreditCard },
];

const GRADES = [
  "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
];

const HEARD_OPTIONS = [
  "Social Media", "Friend / Family", "School", "Google Search", "Other"
];

const RELATIONSHIP_OPTIONS = ["Father", "Mother", "Guardian"];

const COUNTRIES = [
  "United Kingdom", "United States", "India", "United Arab Emirates", "Saudi Arabia", 
  "Qatar", "Oman", "Kuwait", "Bahrain", "Canada", "Australia", "Other"
];

const DAYS = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const MIN_ENROLLMENT_AGE = 4;
const MAX_ENROLLMENT_AGE = 18;
const currentYear = new Date().getFullYear();
const maxBirthYear = currentYear - MIN_ENROLLMENT_AGE;
const minBirthYear = currentYear - MAX_ENROLLMENT_AGE;

const YEARS = Array.from({ length: maxBirthYear - minBirthYear + 1 }, (_, i) => (maxBirthYear - i).toString());


const PROGRAM_OPTIONS = [
  "ZeeQue Plus Quran"
];

const BATCH_TIMINGS = [
  { id: "morning",   label: "Morning",   time: "6 AM – 9 AM",   Icon: Sun },
  { id: "afternoon", label: "Afternoon", time: "12 PM – 3 PM",  Icon: Sunset },
  { id: "evening",   label: "Evening",   time: "5 PM – 8 PM",   Icon: Moon },
];

/* ── Colors ── */
const C = {
  teal:       "#0D9488",
  tealDark:   "var(--text-primary)",
  tealDeep:   "#0D9488", // Using brand teal
  orange:     "#F97316",
  slate:      "var(--text-primary)",
  gray:       "var(--text-secondary)",
  grayLight:  "var(--text-muted)",
  grayBorder: "var(--glass-border)",
  red:        "#EF4444",
  green:      "#22C55E",
  white:      "#FFFFFF", // For solid high-contrast elements
  bgPage:     "var(--bg-page)",
  bgCard:     "var(--card-bg)",
  glassBg:    "var(--glass-bg)",
};

/* ── Animation Variants ── */
const stepVariants = {
  initial:  { opacity: 0, x: 30 },
  animate:  { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  exit:     { opacity: 0, x: -30, transition: { duration: 0.3, ease: "easeIn" as const } },
};

const checkVariants = {
  initial: { scale: 0.7, opacity: 0 },
  animate: { scale: [0.7, 1.1, 1], opacity: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const shakeVariants = {
  shake: { x: [0, -6, 6, -4, 4, 0], transition: { duration: 0.4 } },
};

const successVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: [0, 1.15, 1], opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

/* ── Helpers ── */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+]?[\d\s()-]{7,15}$/;

function validateStep(step: number, data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  if (step === 0) {
    if (!data.studentName.trim()) errors.studentName = "Student name is required";
    if (!data.dateOfBirth) errors.dateOfBirth = "Date of birth is required";
    if (!data.gender) errors.gender = "Please select gender";
    if (!data.grade) errors.grade = "Please select a class";
  } else if (step === 1) {
    if (!data.parentName.trim()) errors.parentName = "Parent name is required";
    if (!data.parentRelationship) errors.parentRelationship = "Please select relationship";
    // Email is now optional
    if (data.parentEmail.trim() && !emailRegex.test(data.parentEmail)) {
      errors.parentEmail = "Enter a valid email";
    }
    if (!data.parentPhone.trim()) errors.parentPhone = "Mobile number is required";
    else if (!phoneRegex.test(data.parentPhone)) errors.parentPhone = "Enter a valid phone number";
    if (!data.parentWhatsapp.trim()) errors.parentWhatsapp = "WhatsApp number is required";
    else if (!phoneRegex.test(data.parentWhatsapp)) errors.parentWhatsapp = "Enter a valid phone number";
    if (!data.countryOfResidence) errors.countryOfResidence = "Please select country";
  } else if (step === 2) {
    if (!data.interestedProgram) errors.interestedProgram = "Please select a program";
    if (!data.batchTiming) errors.batchTiming = "Please select a batch timing";
    if (!data.agreeTerms) errors.agreeTerms = "You must agree to the terms";
  }
  return errors;
}

/* ═══════════════════════════════════════════════════
   Stepper Component
   ═══════════════════════════════════════════════════ */
function Stepper({ currentStep }: { currentStep: number }) {
  const activeStep = STEPS[currentStep];
  return (
    <div 
      className="form-stepper-container"
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 60, gap: 0, width: "100%", maxWidth: 600, margin: "0 auto 60px",
        position: "relative"
      }}>
      {STEPS.map((step, i) => {
        const completed = i < currentStep;
        const active = i === currentStep;
        const StepIcon = step.icon;
        return (
          <div key={i} style={{ 
            display: "flex", 
            alignItems: "center", 
            flex: i < STEPS.length - 1 ? 1 : "none",
            position: "relative" 
          }}>
            {/* Circle & Label Group */}
            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              position: "relative",
              flexShrink: 0
            }}>
              <motion.div
                animate={{
                  scale: active ? 1.08 : 1,
                  backgroundColor: completed ? C.teal : active ? C.white : "transparent",
                  borderColor: completed ? C.teal : active ? C.teal : C.grayBorder,
                  boxShadow: active ? `0 0 0 4px rgba(13,148,136,0.15)` : "none",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  width: 52, height: 52, borderRadius: "50%",
                  border: "2px solid",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", zIndex: 2, flexShrink: 0,
                }}
              >
                <AnimatePresence mode="wait">
                  {completed ? (
                    <motion.div 
                      key="check" 
                      variants={checkVariants} 
                      initial="initial" 
                      animate="animate" 
                      exit={{ opacity: 0, scale: 0.5 }}
                      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <Check size={22} color={C.white} strokeWidth={3} />
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="icon" 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }}
                      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <StepIcon size={22} color={active ? C.teal : "var(--text-secondary)"} strokeWidth={2.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* Label positioned absolutely below circle */}
              <div 
                className={`stepper-label-container ${active ? "active" : ""}`}
                style={{
                  position: "absolute",
                  top: 64,
                  width: 160,
                  textAlign: "center",
                  left: "50%",
                  transform: "translateX(-50%)",
                  pointerEvents: "none"
                }}>
                <span style={{
                  fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.8,
                  color: i === currentStep ? C.teal : i < currentStep ? C.green : C.gray,
                  transition: "color 0.3s",
                  display: "block",
                  whiteSpace: "nowrap"
                }}>
                  {step.label}
                </span>
              </div>
            </div>

            {/* Line */}
            {i < STEPS.length - 1 && (
              <div style={{
                flex: 1, height: 3, backgroundColor: C.grayLight,
                position: "relative", overflow: "hidden", borderRadius: 2,
                margin: "0 4px"
              }}>
                <motion.div
                  animate={{ width: completed ? "100%" : "0%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{
                    position: "absolute", top: 0, left: 0,
                    height: "100%", backgroundColor: C.tealDark, borderRadius: 2,
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
      <div className="mobile-active-step-label">
        {activeStep.label}
      </div>
      <style jsx>{`
        .mobile-active-step-label {
          display: none;
        }

        @media (max-width: 767px) {
          .stepper-label-container {
            display: none !important;
          }
          .mobile-active-step-label {
            display: block;
            position: absolute;
            top: 66px;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #115E59;
            pointer-events: none;
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Reusable Form Field
   ═══════════════════════════════════════════════════ */
function FormField({
  label, name, type = "text", placeholder, value, error,
  onChange, required = true, onComplete
}: {
  label: string; name: string; type?: string; placeholder: string;
  value: string; error?: string; onChange: (name: string, value: string) => void;
  required?: boolean; onComplete?: () => void;
}) {
  const isAadhaar = name === "aadhaarNumber";
  const isValid = required 
    ? (value.trim().length > 0 && !error) 
    : (isAadhaar ? (value.replace(/\s/g, "").length === 12 && !error) : true);

  return (
    <div style={{ marginBottom: 18 }} className="form-field-container">
      <label style={{
        display: "block", fontSize: 14, fontWeight: 600,
        color: C.slate, marginBottom: 8
      }}>
        {label} {required && <span style={{ color: C.red }}>*</span>}
      </label>
      <div style={{ position: "relative" }}>
        <motion.input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          animate={error ? "shake" : undefined}
          variants={shakeVariants}
          style={{
            width: "100%", padding: "14px 40px 14px 16px",
            border: `2px solid ${error ? C.red : (isAadhaar && value.replace(/\s/g, "").length > 0 && !isValid) ? C.grayBorder : isValid && value ? C.green : C.grayBorder}`,
            borderRadius: 14, fontSize: 16, color: C.slate,
            outline: "none", backgroundColor: C.bgCard,
            transition: "all 0.3s ease",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && onComplete) onComplete();
          }}
          onFocus={(e) => {
            if (!error) e.currentTarget.style.borderColor = C.teal;
            e.currentTarget.style.boxShadow = `0 0 0 4px rgba(13,148,136,0.15)`;
          }}
          onBlur={(e) => {
            const currentVal = e.currentTarget.value.replace(/\s/g, "");
            const currentIsValid = isAadhaar ? currentVal.length === 12 : (required ? currentVal.length > 0 : true);
            e.currentTarget.style.borderColor = error ? C.red : (isAadhaar && currentVal.length > 0 && !currentIsValid) ? C.grayBorder : currentIsValid && e.currentTarget.value ? C.green : C.grayBorder;
            e.currentTarget.style.boxShadow = "none";
          }}
        />
        <style jsx>{`
          input::placeholder {
            color: var(--text-muted);
            opacity: 0.9;
          }
        `}</style>
        {/* Valid check */}
        <AnimatePresence>
          {isValid && !error && value && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              style={{ position: "absolute", right: 14, top: 0, bottom: 0, display: "flex", alignItems: "center", pointerEvents: "none" }}
            >
              <Check size={18} color={C.green} strokeWidth={3} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              marginTop: 6, color: C.red, fontSize: 13, fontWeight: 600
            }}
          >
            <AlertCircle size={14} /> {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Select Field
   ═══════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════
   Custom Dropdown Component
   ═══════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════
   Custom Dropdown Component
   ═══════════════════════════════════════════════════ */
function CustomDropdown({
  label, options, value, error, placeholder,
  onChange, required = true, icon: Icon, marginBottom = 24, onComplete
}: {
  label?: string; options: string[];
  value: string; error?: string; placeholder: string;
  onChange: (value: string) => void;
  required?: boolean; icon?: any; marginBottom?: number;
  onComplete?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isOpen]);

  const handleSelect = (opt: string) => {
    onChange(opt);
    setIsOpen(false);
    if (onComplete) {
      setTimeout(onComplete, 100);
    }
  };

  return (
    <div ref={containerRef} style={{ marginBottom: 18, position: "relative" }}>
      {label && (
        <label style={{
          display: "block", fontSize: 14, fontWeight: 600,
          color: C.slate, marginBottom: 8
        }}>
          {label} {required && <span style={{ color: C.red }}>*</span>}
        </label>
      )}
      
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%", padding: "14px 16px",
          border: `2px solid ${error ? C.red : value ? C.green : C.grayBorder}`,
          borderRadius: 14, fontSize: 16, color: value ? C.slate : C.gray,
          backgroundColor: C.bgCard, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "border-color 0.3s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {Icon && <Icon size={18} color={C.teal} />}
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginRight: 8 }}>
          {value || placeholder}
        </span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={20} color={C.gray} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              onClick={() => setIsOpen(false)}
              style={{ position: "fixed", inset: 0, zIndex: 40 }} 
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{
                position: "absolute", top: "100%", left: 0, right: 0,
                marginTop: 8, backgroundColor: "var(--stats-bg)", borderRadius: 14,
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                border: "1px solid var(--glass-border)",
                maxHeight: 250, overflowY: "auto", zIndex: 100,
                padding: "8px 0"
              }}
            >
              {options.map((opt) => (
                <div
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  style={{
                    padding: "12px 16px", cursor: "pointer",
                    fontSize: 15, color: value === opt ? C.white : C.slate,
                    backgroundColor: value === opt ? C.teal : "transparent",
                    fontWeight: value === opt ? 700 : 500,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (value !== opt) e.currentTarget.style.backgroundColor = C.glassBg;
                  }}
                  onMouseLeave={(e) => {
                    if (value !== opt) e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {opt}
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
            style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6, color: C.red, fontSize: 13, fontWeight: 600 }}
          >
            <AlertCircle size={14} /> {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SelectField({
  label, name, options, value, error, placeholder,
  onChange, required = true, marginBottom = 24, onComplete
}: {
  label: string; name: string; options: string[];
  value: string; error?: string; placeholder: string;
  onChange: (name: string, value: string) => void;
  required?: boolean; marginBottom?: number;
  onComplete?: () => void;
}) {
  return (
    <CustomDropdown 
      label={label} options={options} value={value} 
      error={error} placeholder={placeholder} 
      onChange={(val) => onChange(name, val)} 
      required={required} 
      marginBottom={marginBottom}
      onComplete={onComplete}
    />
  );
}

/* ═══════════════════════════════════════════════════
   Custom Date Picker Component
   ═══════════════════════════════════════════════════ */
function CustomDatePicker({
  label, value, onChange, error, required = true, years = YEARS, maxWidth = "100%", onComplete
}: {
  label: string; value: string; onChange: (val: string) => void; error?: string; required?: boolean;
  years?: string[]; maxWidth?: string | number;
  onComplete?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<"days" | "months" | "years">("days");
  const [pickerMonth, setPickerMonth] = useState(value ? new Date(value).getMonth() : new Date().getMonth());
  const [pickerYear, setPickerYear] = useState(value ? new Date(value).getFullYear() : maxBirthYear);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isOpen]);

  const tempDate = value ? new Date(value) : null;
  const day = tempDate ? tempDate.getDate().toString() : "";
  const month = tempDate ? (tempDate.getMonth() + 1).toString() : "";
  const year = tempDate ? tempDate.getFullYear().toString() : "";
  
  const displayDate = day && month && year ? `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}` : "";

  const getDaysInMonth = (m: number, y: number) => new Date(y, m + 1, 0).getDate();
  const getFirstDayOfMonth = (m: number, y: number) => new Date(y, m, 1).getDay();

  const daysInMonth = getDaysInMonth(pickerMonth, pickerYear);
  const firstDay = getFirstDayOfMonth(pickerMonth, pickerYear);
  const calendarDays: (number | null)[] = Array(firstDay).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  const handleSelectDate = (d: number) => {
    const newVal = `${pickerYear}-${String(pickerMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    onChange(newVal);
    setIsOpen(false);
    setView("days");
    if (onComplete) {
      setTimeout(onComplete, 100);
    }
  };

  const handleToday = () => {
    const today = new Date();
    const newVal = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    onChange(newVal);
    setPickerMonth(today.getMonth());
    setPickerYear(today.getFullYear());
    setIsOpen(false);
    setView("days");
    if (onComplete) {
      setTimeout(onComplete, 100);
    }
  };

  const handlePrevMonth = () => {
    if (pickerMonth === 0) {
      if (pickerYear > minBirthYear) {
        setPickerMonth(11);
        setPickerYear(pickerYear - 1);
      }
    } else {
      setPickerMonth(pickerMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (pickerMonth === 11) {
      if (pickerYear < maxBirthYear) {
        setPickerMonth(0);
        setPickerYear(pickerYear + 1);
      }
    } else {
      setPickerMonth(pickerMonth + 1);
    }
  };

  const currentMonths = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <div ref={containerRef} style={{ marginBottom: 18, position: "relative", maxWidth }}>
      <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: C.slate, marginBottom: 8 }}>
        {label} {required && <span style={{ color: C.red }}>*</span>}
      </label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%", padding: "14px 16px",
          border: `2px solid ${error ? C.red : value ? C.green : C.grayBorder}`,
          borderRadius: 14, fontSize: 16, color: value ? C.slate : C.gray,
          backgroundColor: C.bgCard, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "all 0.3s ease",
        }}
      >
        <span>{displayDate || "Select Date"}</span>
        <Calendar size={18} color={C.teal} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              onClick={() => { setIsOpen(false); setView("days"); }}
              style={{ position: "fixed", inset: 0, zIndex: 40 }}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              style={{
                position: "absolute", top: "100%", left: 0,
                width: "100%",
                marginTop: 8, backgroundColor: "var(--stats-bg)", borderRadius: 18,
                boxShadow: "0 15px 50px rgba(0,0,0,0.3)",
                border: "1px solid var(--glass-border)",
                zIndex: 100, padding: "12px", minWidth: 260,
                overflow: "hidden"
              }}
            >
              {/* Header */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                marginBottom: 12, fontSize: 14, fontWeight: 700, color: C.slate
              }}>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(13,148,136,0.08)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrevMonth}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: 28, height: 28, borderRadius: "50%", color: C.gray,
                    transition: "all 0.2s",
                  }}
                >
                  <ChevronLeft size={16} />
                </motion.button>

                <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13 }}>
                  <button 
                    onClick={() => setView(view === "months" ? "days" : "months")}
                    style={{ 
                      background: view === "months" ? "rgba(13,148,136,0.1)" : "none", border: "none", cursor: "pointer", 
                      fontWeight: 800, color: view === "months" ? C.teal : C.slate,
                      padding: "4px 8px", borderRadius: 8, transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(13,148,136,0.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                  >
                    {MONTHS[pickerMonth]}
                  </button>
                  <button 
                    onClick={() => setView(view === "years" ? "days" : "years")}
                    style={{ 
                      background: view === "years" ? "rgba(13,148,136,0.1)" : "none", border: "none", cursor: "pointer", 
                      fontWeight: 800, color: view === "years" ? C.teal : C.slate,
                      padding: "4px 8px", borderRadius: 8, transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(13,148,136,0.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                  >
                    {pickerYear}
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(13,148,136,0.08)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNextMonth}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: 28, height: 28, borderRadius: "50%", color: C.gray,
                    transition: "all 0.2s",
                  }}
                >
                  <ChevronRight size={16} />
                </motion.button>
              </div>

              {/* Views container */}
              <div style={{ minHeight: 180, position: "relative" }}>
                {view === "days" && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
                    {/* Day Titles */}
                    <div style={{
                      display: "grid", gridTemplateColumns: "repeat(7, 1fr)",
                      gap: 2, marginBottom: 4, textAlign: "center"
                    }}>
                      {["SU", "MO", "TU", "WE", "TH", "FR", "SA"].map((d) => (
                        <div key={d} style={{ fontSize: 10, fontWeight: 800, color: C.gray, padding: "4px 0" }}>
                          {d}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
                      {calendarDays.map((d, i) => {
                        const isSelected = d && tempDate && tempDate.getDate() === d && tempDate.getMonth() === pickerMonth && tempDate.getFullYear() === pickerYear;
                        const isToday = d && new Date().getDate() === d && new Date().getMonth() === pickerMonth && new Date().getFullYear() === pickerYear;
                        
                        return (
                          <motion.div
                            key={i}
                            whileHover={d ? { scale: 1.1, backgroundColor: isSelected ? C.teal : "rgba(13,148,136,0.08)" } : {}}
                            whileTap={d ? { scale: 0.9 } : {}}
                            onClick={() => d && handleSelectDate(d)}
                            style={{
                              aspectRatio: "1",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              borderRadius: 8, fontSize: 11, fontWeight: 700,
                              cursor: d ? "pointer" : "default",
                              backgroundColor: isSelected ? C.teal : "transparent",
                              color: isSelected ? C.white : d ? C.slate : "transparent",
                              border: isToday && !isSelected ? `1px solid ${C.teal}` : "none",
                              transition: "all 0.2s",
                            }}
                          >
                            {d}
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {view === "months" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, padding: "10px 0" }}
                  >
                    {currentMonths.map((m, i) => (
                      <button
                        key={m}
                        onClick={() => { setPickerMonth(i); setView("days"); }}
                        style={{
                          height: 40, borderRadius: 10, border: "none", cursor: "pointer",
                          fontSize: 13, fontWeight: 700,
                          backgroundColor: pickerMonth === i ? C.teal : "rgba(13,148,136,0.05)",
                          color: pickerMonth === i ? C.white : C.teal,
                          transition: "all 0.2s"
                        }}
                        onMouseEnter={(e) => { if (pickerMonth !== i) e.currentTarget.style.backgroundColor = "rgba(13,148,136,0.1)"; }}
                        onMouseLeave={(e) => { if (pickerMonth !== i) e.currentTarget.style.backgroundColor = "rgba(13,148,136,0.05)"; }}
                      >
                        {m}
                      </button>
                    ))}
                  </motion.div>
                )}

                {view === "years" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ 
                      display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, 
                      maxHeight: 180, overflowY: "auto", padding: "10px 4px 10px 0" 
                    }}
                  >
                    {years.map(y => (
                      <button
                        key={y}
                        onClick={() => { setPickerYear(parseInt(y)); setView("days"); }}
                        style={{
                          height: 36, borderRadius: 10, border: "none", cursor: "pointer",
                          fontSize: 13, fontWeight: 700,
                          backgroundColor: pickerYear === parseInt(y) ? C.teal : "rgba(13,148,136,0.05)",
                          color: pickerYear === parseInt(y) ? C.white : C.teal,
                          transition: "all 0.2s"
                        }}
                        onMouseEnter={(e) => { if (pickerYear !== parseInt(y)) e.currentTarget.style.backgroundColor = "rgba(13,148,136,0.1)"; }}
                        onMouseLeave={(e) => { if (pickerYear !== parseInt(y)) e.currentTarget.style.backgroundColor = "rgba(13,148,136,0.05)"; }}
                      >
                        {y}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                paddingTop: 12, borderTop: `1px solid ${C.grayBorder}`, marginTop: 8
              }}>
<div style={{ flex: 1 }} />
                <button
                  type="button"
                  onClick={() => { setIsOpen(false); setView("days"); }}
                  style={{
                    background: "rgba(13,148,136,0.1)", border: "none", cursor: "pointer",
                    fontSize: 11, fontWeight: 800, color: C.teal, padding: "6px 12px",
                    borderRadius: 8
                  }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
            style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8, color: C.red, fontSize: 13, fontWeight: 600 }}
          >
            <AlertCircle size={14} /> {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


/* ═══════════════════════════════════════════════════
   MAIN ENROLLMENT FORM
   ═══════════════════════════════════════════════════ */
export default function EnrollmentForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    studentName: "", dateOfBirth: "", gender: "", grade: "",
    parentName: "", parentEmail: "", parentPhone: "", parentWhatsapp: "", parentRelationship: "", countryOfResidence: "", 
    interestedProgram: "", heardFrom: "",
    aadhaarNumber: "", hasCompletedPreschool: false,
    batchTiming: "", agreeTerms: false,
  });

  const fieldRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  useEffect(() => {
    if (submitted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [submitted]);

  const scrollToNextField = (currentField: string) => {
    const stepFields = [
      ["studentName", "dateOfBirth", "gender", "grade", "aadhaarNumber"],
      ["parentName", "parentRelationship", "parentPhone", "parentWhatsapp", "parentEmail", "countryOfResidence", "heardFrom"],
      ["interestedProgram", "batchTiming", "agreeTerms"]
    ];

    const flatFields = stepFields.flat();
    const currentIndex = flatFields.indexOf(currentField);
    
    if (currentIndex !== -1 && currentIndex < flatFields.length - 1) {
      const nextField = flatFields[currentIndex + 1];
      const nextTwoField = currentIndex < flatFields.length - 2 ? flatFields[currentIndex + 2] : null;
      
      // Scroll such that the next TWO fields are visible if possible
      const targetField = nextTwoField || nextField;
      if (fieldRefs.current[targetField]) {
        fieldRefs.current[targetField]?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (fieldRefs.current[nextField]) {
        fieldRefs.current[nextField]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const handleChange = useCallback((name: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const handleNext = () => {
    const stepErrors = validateStep(currentStep, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setCurrentStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    const stepErrors = validateStep(currentStep, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1800);
  };

  /* ── Success Screen ── */
  if (submitted) {
    return (
      <div style={{
        minHeight: "100vh", display: "flex", alignItems: "flex-start", justifyContent: "center",
        padding: "100px 24px 80px", backgroundColor: C.bgPage,
      }} className="application-submitted-page">
        <motion.div
          variants={successVariants} initial="initial" animate="animate"
          style={{
            textAlign: "center", backgroundColor: C.bgCard,
            padding: "60px 48px", borderRadius: 28,
            boxShadow: "0 25px 60px rgba(0,0,0,0.06)",
            maxWidth: 500, width: "100%",
            position: "relative", overflow: "hidden"
          }}
        >
          {/* Subtle Confetti Animation */}
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                top: -20, 
                left: `${Math.random() * 100}%`, 
                rotate: 0,
                opacity: 1 
              }}
              animate={{ 
                top: "100%", 
                rotate: 360,
                opacity: 0
              }}
              transition={{ 
                duration: 1 + Math.random(), 
                delay: Math.random() * 0.5,
                ease: "easeOut" 
              }}
              style={{
                position: "absolute",
                width: 8,
                height: 8,
                backgroundColor: i % 3 === 0 ? C.teal : i % 3 === 1 ? "#F59E0B" : "#7DD3FC",
                borderRadius: i % 2 === 0 ? "2px" : "50%",
                zIndex: 1,
                pointerEvents: "none"
              }}
            />
          ))}

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            style={{
              width: 80, height: 80, borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 28px", boxShadow: `0 10px 30px rgba(13,148,136,0.2)`,
              position: "relative", zIndex: 2
            }}
          >
            <Check size={40} color={C.white} strokeWidth={4} />
          </motion.div>

          <h2 style={{ fontSize: 28, fontWeight: 800, color: C.tealDark, marginBottom: 12 }}>
            Enrollment Submitted Successfully!
          </h2>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.6, marginBottom: 32 }}>
            Thank you for choosing ZeeQue Plus. Our team will review your application and contact you within 24–48 hours.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
            <div
              style={{
                display: "inline-flex", gap: 8, alignItems: "center",
                padding: "8px 20px", backgroundColor: "rgba(13,148,136,0.05)",
                borderRadius: 100, color: C.tealDeep, fontWeight: 700, fontSize: 13
              }}
            >
              <Check size={14} /> A confirmation email has been sent
            </div>

            <Link href="/" style={{ textDecoration: "none", width: "100%" }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: "100%",
                  padding: "16px 32px",
                  borderRadius: "16px",
                  background: `linear-gradient(135deg, ${C.teal}, ${C.tealDeep})`,
                  color: C.white,
                  border: "none",
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: "pointer",
                  boxShadow: "0 10px 25px rgba(13,148,136,0.2)",
                  transition: "all 0.3s ease"
                }}
              >
                Return to Homepage
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  /* ── Main Form ── */
  return (
    <section style={{
      minHeight: "100vh", backgroundColor: C.bgPage,
      padding: "140px 24px 80px",
    }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }} className="form-header">
          <h1 style={{
            fontSize: 40, fontWeight: 800, color: C.tealDark,
            marginBottom: 10, lineHeight: 1.2,
          }}>
            Secure Enrollment
          </h1>
          <p style={{ fontSize: 17, color: C.gray, lineHeight: 1.6 }}>
            Begin your child&apos;s Qur&apos;anic journey with ZeeQue Plus
          </p>
        </div>

        <Stepper currentStep={currentStep} />

        {/* Card */}
        <motion.div
          layout
          className="form-main-card"
          style={{
            backgroundColor: C.bgCard, borderRadius: 28,
            padding: "48px 40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
          }}
        >
          <AnimatePresence mode="wait">
            {/* ── Step 1: Student Profile ── */}
            {currentStep === 0 && (
              <motion.div key="step0" variants={stepVariants} initial="initial" animate="animate" exit="exit">
                <h3 style={{ fontSize: 22, fontWeight: 700, color: C.slate, marginBottom: 28 }}>
                  Student Information
                </h3>

                <div className="form-row-2col" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 18 }}>
                  <div className="name-field-col" style={{ flex: "1 1 60%", minWidth: 200 }} ref={el => { fieldRefs.current.studentName = el; }}>
                    <FormField
                      label="Student Full Name" name="studentName"
                      placeholder="Enter legal name"
                      value={formData.studentName} error={errors.studentName}
                      onChange={handleChange}
                      onComplete={() => scrollToNextField("studentName")}
                    />
                  </div>
                  <div className="dob-field-col" style={{ flex: "1 1 30%", minWidth: 160 }} ref={el => { fieldRefs.current.dateOfBirth = el; }}>
                    <CustomDatePicker
                      label="Date of Birth"
                      value={formData.dateOfBirth} error={errors.dateOfBirth}
                      onChange={(val) => handleChange("dateOfBirth", val)}
                      onComplete={() => scrollToNextField("dateOfBirth")}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 18 }}>
                  <div style={{ flex: "1 1 calc(50% - 8px)", minWidth: 200 }} ref={el => { fieldRefs.current.gender = el; }}>
                    <SelectField
                      label="Gender" name="gender"
                      options={["Male", "Female"]} placeholder="Select gender"
                      value={formData.gender} error={errors.gender}
                      onChange={handleChange}
                      marginBottom={0}
                      onComplete={() => scrollToNextField("gender")}
                    />
                  </div>
                  <div style={{ flex: "1 1 calc(50% - 8px)", minWidth: 200 }} ref={el => { fieldRefs.current.grade = el; }}>
                    <CustomDropdown
                      label="Class / Grade"
                      options={GRADES} placeholder="Select class"
                      value={formData.grade} error={errors.grade}
                      onChange={(val) => handleChange("grade", val)}
                      marginBottom={0}
                      onComplete={() => scrollToNextField("grade")}
                    />
                  </div>
                </div>

                <div ref={el => { fieldRefs.current.aadhaarNumber = el; }}>
                  <FormField
                    label="Aadhaar Number (Optional)" name="aadhaarNumber"
                    placeholder="Enter 12-digit Aadhaar"
                    value={formData.aadhaarNumber} error={errors.aadhaarNumber}
                    onChange={handleChange} required={false}
                    onComplete={() => scrollToNextField("aadhaarNumber")}
                  />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <motion.label
                    className="preschool-card"
                    whileHover={{ scale: 1.01 }}
                    onClick={() => handleChange("hasCompletedPreschool", !formData.hasCompletedPreschool)}
                    style={{
                      display: "flex", alignItems: "center", gap: 16,
                      padding: "20px 24px", borderRadius: 20,
                      border: `2px solid ${formData.hasCompletedPreschool ? C.teal : C.grayBorder}`,
                      backgroundColor: formData.hasCompletedPreschool ? "rgba(13,148,136,0.04)" : C.bgCard,
                      cursor: "pointer", transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                        border: `2px solid ${formData.hasCompletedPreschool ? C.teal : C.grayLight}`,
                        backgroundColor: formData.hasCompletedPreschool ? C.teal : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <AnimatePresence>
                        {formData.hasCompletedPreschool && (
                          <motion.div 
                            initial={{ scale: 0 }} 
                            animate={{ scale: 1 }} 
                            exit={{ scale: 0 }}
                            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                          >
                            <Check size={16} color={C.white} strokeWidth={3} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: 16, fontWeight: 700, color: C.slate, display: "block", marginBottom: 4 }}>
                        Has completed ZeeQue Preschool?
                      </span>
                      <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.5 }}>
                        Check this if the student has previously studied in our preschool program.
                      </p>
                    </div>
                  </motion.label>
                </div>
              </motion.div>
            )}

            {/* ── Step 2: Parent Details ── */}
            {currentStep === 1 && (
              <motion.div key="step1" variants={stepVariants} initial="initial" animate="animate" exit="exit">
                 <h3 style={{ fontSize: 22, fontWeight: 700, color: C.slate, marginBottom: 20 }}>
                  Parent / Guardian Details
                </h3>

                <div ref={el => { fieldRefs.current.parentName = el; }}>
                  <FormField
                    label="Parent / Guardian Full Name" name="parentName"
                    placeholder="Enter Name"
                    value={formData.parentName} error={errors.parentName}
                    onChange={handleChange}
                    onComplete={() => scrollToNextField("parentName")}
                  />
                </div>

                <div ref={el => { fieldRefs.current.parentRelationship = el; }}>
                  <SelectField
                    label="Relationship to Student" name="parentRelationship"
                    options={RELATIONSHIP_OPTIONS} placeholder="Select relationship"
                    value={formData.parentRelationship} error={errors.parentRelationship}
                    onChange={handleChange}
                    onComplete={() => scrollToNextField("parentRelationship")}
                  />
                </div>

                <div ref={el => { fieldRefs.current.parentPhone = el; }}>
                  <FormField
                    label="Contact Number" name="parentPhone" type="tel"
                    placeholder="Enter Contact Number"
                    value={formData.parentPhone} error={errors.parentPhone}
                    onChange={handleChange}
                    onComplete={() => scrollToNextField("parentPhone")}
                  />
                </div>

                <div ref={el => { fieldRefs.current.parentWhatsapp = el; }}>
                  <FormField
                    label="WhatsApp Number" name="parentWhatsapp" type="tel"
                    placeholder="Enter whatsapp number"
                    value={formData.parentWhatsapp} error={errors.parentWhatsapp}
                    onChange={handleChange}
                    onComplete={() => scrollToNextField("parentWhatsapp")}
                  />
                </div>

                <div ref={el => { fieldRefs.current.parentEmail = el; }}>
                  <FormField
                    label="Email Address" name="parentEmail" type="email"
                    placeholder="Enter email address"
                    value={formData.parentEmail} error={errors.parentEmail}
                    onChange={handleChange} required={false}
                    onComplete={() => scrollToNextField("parentEmail")}
                  />
                </div>

                <div ref={el => { fieldRefs.current.countryOfResidence = el; }}>
                  <SelectField
                    label="Country of Residence" name="countryOfResidence"
                    options={COUNTRIES} placeholder="Select your country"
                    value={formData.countryOfResidence} error={errors.countryOfResidence}
                    onChange={handleChange}
                    onComplete={() => scrollToNextField("countryOfResidence")}
                  />
                </div>

                <div ref={el => { fieldRefs.current.heardFrom = el; }}>
                  <SelectField
                    label="How did you hear about us?" name="heardFrom"
                    options={HEARD_OPTIONS} placeholder="Optional"
                    value={formData.heardFrom} error={errors.heardFrom}
                    onChange={handleChange} required={false}
                    onComplete={() => scrollToNextField("heardFrom")}
                  />
                </div>
              </motion.div>
            )}

            {/* ── Step 3: Program Selection ── */}
            {currentStep === 2 && (
              <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit">
                <h3 style={{ fontSize: 22, fontWeight: 700, color: C.slate, marginBottom: 20 }}>
                  Program Preferences
                </h3>

                <div ref={el => { fieldRefs.current.interestedProgram = el; }}>
                  <SelectField
                    label="Interested Program" name="interestedProgram"
                    options={PROGRAM_OPTIONS} placeholder="Select interested program"
                    value={formData.interestedProgram} error={errors.interestedProgram}
                    onChange={handleChange}
                    onComplete={() => scrollToNextField("interestedProgram")}
                  />
                </div>

                {/* Batch Timing Cards */}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: C.slate, marginBottom: 12 }}>
                    Preferred Batch Timing <span style={{ color: C.red }}>*</span>
                  </label>
                  <div style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 8,
                  }} ref={el => { fieldRefs.current.batchTiming = el; }}>
                    {BATCH_TIMINGS.map(batch => {
                      const selected = formData.batchTiming === batch.id;
                      return (
                        <motion.button
                          key={batch.id} type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => {
                            handleChange("batchTiming", batch.id);
                            setTimeout(() => scrollToNextField("batchTiming"), 100);
                          }}
                          style={{
                            padding: "16px 8px", borderRadius: 16, cursor: "pointer",
                            border: `2px solid ${selected ? C.teal : C.grayBorder}`,
                            backgroundColor: selected ? C.teal : C.bgCard,
                            color: selected ? "#FFFFFF" : C.slate,
                            display: "flex", flexDirection: "column", alignItems: "center",
                            gap: 8, transition: "all 0.3s ease",
                            boxShadow: selected ? `0 8px 30px rgba(13,148,136,0.25)` : "0 2px 8px rgba(0,0,0,0.04)",
                          }}
                        >
                          <batch.Icon size={22} strokeWidth={1.8} color={selected ? C.white : C.teal} />
                          <span style={{ fontWeight: 700, fontSize: 13 }}>{batch.label}</span>
                          <span style={{ fontSize: 10, opacity: 0.8 }}>{batch.time}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                  <AnimatePresence>
                    {errors.batchTiming && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                        style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10, color: C.red, fontSize: 13, fontWeight: 600 }}
                      >
                        <AlertCircle size={14} /> {errors.batchTiming}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>



                {/* Terms Checkbox */}
                <div style={{ marginBottom: 24 }}>
                  <motion.label
                    className="terms-card"
                    whileHover={{ scale: 1.01 }}
                    onClick={() => {
                      handleChange("agreeTerms", !formData.agreeTerms);
                      if (!formData.agreeTerms) setTimeout(() => scrollToNextField("agreeTerms"), 100);
                    }}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 14,
                      padding: "16px 20px", borderRadius: 16,
                      border: `2px solid ${errors.agreeTerms ? C.red : formData.agreeTerms ? C.green : C.grayBorder}`,
                      backgroundColor: formData.agreeTerms ? "rgba(13,148,136,0.04)" : C.bgCard,
                      cursor: "pointer", transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        width: 24, height: 24, borderRadius: 8, flexShrink: 0, marginTop: 2,
                        border: `2px solid ${formData.agreeTerms ? C.teal : C.grayLight}`,
                        backgroundColor: formData.agreeTerms ? C.teal : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <AnimatePresence>
                        {formData.agreeTerms && (
                          <motion.div 
                            initial={{ scale: 0 }} 
                            animate={{ scale: 1 }} 
                            exit={{ scale: 0 }}
                            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                          >
                            <Check size={14} color={C.white} strokeWidth={3} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div>
                      <span style={{ fontSize: 15, fontWeight: 600, color: C.slate }}>
                        I agree to the{" "}
                        <Link 
                          href="/terms-of-use" 
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          style={{ color: C.teal, textDecoration: "underline" }}
                        >
                          Terms & Conditions
                        </Link>{" "}
                        <span style={{ color: C.red }}>*</span>
                      </span>
                      <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.5, marginTop: 4 }}>
                        By submitting, you agree to our enrollment policies, privacy policy, and code of conduct.
                      </p>
                    </div>
                  </motion.label>
                  <AnimatePresence>
                    {errors.agreeTerms && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                        style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8, color: C.red, fontSize: 13, fontWeight: 600 }}
                      >
                        <AlertCircle size={14} /> {errors.agreeTerms}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {/* ── Step 4: Payment Details ── */}
            {currentStep === 3 && (
              <motion.div key="step3" variants={stepVariants} initial="initial" animate="animate" exit="exit" style={{ padding: "0 4px" }}>
                {/* Hero Amount Display */}
                <div style={{ textAlign: "center", marginBottom: 36 }} className="payment-hero">
                  <span style={{ 
                    display: "block", fontSize: 12, fontWeight: 800, color: C.teal, 
                    textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 
                  }}>
                    Total Payable
                  </span>
                  <div style={{ 
                    fontSize: 48, fontWeight: 900, color: C.slate, 
                    letterSpacing: -1, lineHeight: 1 
                  }} className="payment-hero-amount">
                    ₹2,500
                  </div>
                  <p style={{ 
                    fontSize: 14, color: C.gray, marginTop: 12, fontWeight: 600 
                  }}>
                    June Month Fee for 
                    <span style={{ color: C.teal, marginLeft: 4 }}>
                      {formData.interestedProgram || "ZeeQue Plus Quran"}
                    </span>
                  </p>

                  <div style={{ 
                    marginTop: 10, display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "6px 14px", borderRadius: 100, backgroundColor: "rgba(13,148,136,0.08)",
                    color: C.teal, fontSize: 13, fontWeight: 700, border: "1px solid rgba(13,148,136,0.12)"
                  }} className="june-fee-badge">
                    <Calendar size={14} strokeWidth={2.5} /> 
                    <span>June Month Fee Only</span>
                  </div>
                </div>

                <div style={{ marginBottom: 32 }}>
                  <span style={{ 
                    display: "block", fontSize: 11, fontWeight: 800, color: C.gray, 
                    textTransform: "uppercase", letterSpacing: 1, marginBottom: 12, paddingLeft: 4
                  }}>
                    Payment Method
                  </span>
                  
                  {/* Minimal Razorpay Card */}
                  <motion.div
                    className="minimal-payment-card"
                    whileHover={{ scale: 1.01, boxShadow: "0 15px 35px rgba(13,148,136,0.12)" }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      backgroundColor: "rgba(13,148,136,0.03)",
                      border: `1.5px solid ${C.teal}`,
                      borderRadius: 20, padding: "20px 24px", cursor: "pointer",
                      display: "flex", alignItems: "center", gap: 18,
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                  >
                    <div style={{
                      backgroundColor: C.white, width: 42, height: 42, borderRadius: 12,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)", border: `1px solid rgba(13,148,136,0.1)`,
                      flexShrink: 0
                    }}>
                      <img 
                        src="https://razorpay.com/assets/razorpay-glyph.svg" 
                        alt="Razorpay" 
                        style={{ height: 22 }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 17, fontWeight: 800, color: C.slate, lineHeight: 1.2 }}>Razorpay</div>
                      <div style={{ fontSize: 12, color: C.gray, fontWeight: 600, marginTop: 2 }}>UPI, Cards, Wallets & Netbanking</div>
                    </div>
                    <ShieldCheck size={20} color={C.teal} style={{ opacity: 0.6 }} />
                  </motion.div>
                </div>

                {/* Secure Trust Note */}
                <div style={{ 
                  display: "flex", alignItems: "center", justifyContent: "center", 
                  gap: 8, color: C.gray, marginBottom: 8
                }} className="payment-trust-note">
                  <Lock size={12} color={C.teal} />
                  <span style={{ fontSize: 12, fontWeight: 600, opacity: 0.8 }}>
                    Secure 256-bit encrypted checkout via Razorpay
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Navigation Buttons ── */}
          <div className="form-navigation-buttons" style={{
            display: "flex", justifyContent: "center",
            marginTop: 36, gap: 16, flexWrap: "wrap",
          }}>
            {currentStep > 0 && (
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleBack}
                style={{
                  padding: "10px 16px", borderRadius: 14, fontSize: 15, fontWeight: 600,
                  border: `1.5px solid ${C.grayLight}`, backgroundColor: "transparent",
                  color: C.gray, cursor: "pointer", display: "flex",
                  alignItems: "center", justifyContent: "center", gap: 4, transition: "all 0.3s ease",
                  opacity: currentStep === 3 ? 0.7 : 1,
                }}
              >
                <ChevronLeft size={18} /> Back
              </motion.button>
            )}

            <motion.button
              key={currentStep === 3 ? "pay" : "next"}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={currentStep === STEPS.length - 1 ? handleSubmit : handleNext}
              disabled={submitting || (currentStep === 3 && !formData.agreeTerms)}
              style={{
                flex: currentStep === 3 ? 1.5 : 1,
                padding: currentStep === 3 ? "14px 40px" : "10px 24px", 
                borderRadius: 16, fontSize: 16, fontWeight: 800,
                border: "none",
                background: currentStep === 3 
                  ? `linear-gradient(135deg, ${C.teal}, ${C.tealDeep})`
                  : `linear-gradient(135deg, ${C.teal}, #14b8a6)`,
                color: "#FFFFFF", cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "center", gap: 8,
                boxShadow: currentStep === 3 
                  ? `0 12px 35px rgba(13,148,136,0.3)` 
                  : `0 8px 25px rgba(13,148,136,0.2)`,
                transition: "all 0.3s ease",
                opacity: submitting ? 0.7 : 1,
              }}
            >
              {submitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Processing...</span>
                </>
              ) : currentStep === STEPS.length - 1 ? (
                <span>Pay ₹2,500</span>
              ) : (
                <>
                  <span>Continue</span>
                  <ChevronRight size={18} />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

         {/* Security Footer - Only in Payment Step */}
        {currentStep === 3 && (
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 6, marginTop: 28, color: C.gray, fontSize: 12, fontWeight: 600
          }} className="step4-security-footer">
            <ShieldCheck size={14} color={C.gray} />
            <span>Your transaction is secure and encrypted</span>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .payment-selection-card {
            flex-direction: row !important;
            padding: 16px 20px !important;
            gap: 12px !important;
            justify-content: space-between !important;
          }
          .razorpay-logo-group {
            flex-direction: row !important;
            gap: 12px !important;
            text-align: left !important;
          }
          .razorpay-logo-wrapper {
            width: 40px !important;
            height: 40px !important;
            padding: 0 !important;
          }
          .razorpay-logo-wrapper img {
            height: 20px !important;
          }
          .form-navigation-buttons {
            flex-direction: row !important;
            justify-content: center !important;
            gap: 16px !important;
            margin-top: 28px !important;
            flex-wrap: nowrap !important;
          }
          .form-navigation-buttons button {
            flex: 1 !important;
            padding: 8px 16px !important;
            font-size: 14px !important;
            justify-content: center !important;
            min-width: unset !important;
            max-width: 120px !important;
            border-radius: 12px !important;
          }
          .name-field-col, .dob-field-col {
            flex: 1 1 100% !important;
            min-width: 100% !important;
          }
          .form-row-2col {
            gap: 0 !important;
            margin-bottom: 0 !important;
          }
          .form-field-container {
            margin-bottom: 9px !important;
          }
          .preschool-card, .terms-card {
            padding: 12px 16px !important;
            gap: 12px !important;
            border-radius: 16px !important;
          }
          .preschool-card p, .terms-card p {
            font-size: 13px !important;
            margin-top: 2px !important;
          }
          .terms-card {
            margin-bottom: 12px !important;
          }
          .application-submitted-page {
            padding: 40px 20px 20px !important;
          }
          .application-submitted-page > div {
            padding: 32px 24px !important;
          }
          /* Section padding reductions by 50% */
          .form-header {
            margin-bottom: 20px !important;
          }
          .form-stepper-container {
            margin-bottom: 30px !important;
          }
          .form-main-card {
            padding: 32px 20px !important;
          }
          .payment-hero-amount {
            font-size: 38px !important;
          }
          .minimal-payment-card {
            padding: 16px 20px !important;
            border-radius: 16px !important;
          }
          .payment-hero {
            margin-bottom: 28px !important;
          }
          .payment-trust-note {
            margin-bottom: 0 !important;
          }
          .form-navigation-buttons button {
            flex: 1 !important;
            padding: 10px 14px !important;
            font-size: 14px !important;
            justify-content: center !important;
            gap: 4px !important;
          }
          .form-navigation-buttons button:last-child {
            flex: 2 !important; /* Pay Now dominant */
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
