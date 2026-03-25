"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
const YEARS = Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - i).toString());


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
  tealDark:   "#115E59",
  tealDeep:   "#0F766E",
  orange:     "#F97316",
  orangeDark: "#EA580C",
  slate:      "#0F172A",
  gray:       "#64748B",
  grayLight:  "#CBD5E1",
  grayBorder: "#E2E8F0",
  red:        "#DC2626",
  green:      "#16A34A",
  white:      "#FFFFFF",
  bgPage:     "#F0F9FF",
  bgCard:     "#FFFFFF",
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
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      marginBottom: 60, gap: 0, width: "100%", maxWidth: 600, margin: "0 auto 60px"
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
                  backgroundColor: completed ? C.tealDark : active ? C.white : C.white,
                  borderColor: completed ? C.tealDark : active ? C.teal : C.grayLight,
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
                    <motion.div key="check" variants={checkVariants} initial="initial" animate="animate" exit={{ opacity: 0, scale: 0.5 }}>
                      <Check size={22} color={C.white} strokeWidth={3} />
                    </motion.div>
                  ) : (
                    <motion.div key="icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <StepIcon size={22} color={active ? C.teal : C.grayLight} strokeWidth={2} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* Label positioned absolutely below circle */}
              <div style={{
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
                  color: i === currentStep ? C.tealDark : i < currentStep ? C.teal : C.grayLight,
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
  const isValid = required ? value.trim().length > 0 && !error : true;
  return (
    <div style={{ marginBottom: 18 }}>
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
            border: `2px solid ${error ? C.red : isValid ? C.green : C.grayBorder}`,
            borderRadius: 14, fontSize: 16, color: C.slate,
            outline: "none", backgroundColor: C.white,
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && onComplete) onComplete();
          }}
          onFocus={(e) => {
            if (!error) e.currentTarget.style.borderColor = C.teal;
            e.currentTarget.style.boxShadow = `0 0 0 3px rgba(13,148,136,0.1)`;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error ? C.red : isValid ? C.green : C.grayBorder;
            e.currentTarget.style.boxShadow = "none";
          }}
        />
        {/* Valid check */}
        <AnimatePresence>
          {isValid && !error && value && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)" }}
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

  const handleSelect = (opt: string) => {
    onChange(opt);
    setIsOpen(false);
    if (onComplete) {
      setTimeout(onComplete, 100);
    }
  };

  return (
    <div style={{ marginBottom: 18, position: "relative" }}>
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
          backgroundColor: C.white, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "border-color 0.3s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {Icon && <Icon size={18} color={C.teal} />}
          <span>{value || placeholder}</span>
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
                marginTop: 8, backgroundColor: C.white, borderRadius: 14,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                border: `1px solid ${C.grayBorder}`,
                maxHeight: 250, overflowY: "auto", zIndex: 50,
                padding: "8px 0"
              }}
            >
              {options.map((opt) => (
                <div
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  style={{
                    padding: "12px 16px", cursor: "pointer",
                    fontSize: 15, color: value === opt ? C.teal : C.slate,
                    backgroundColor: value === opt ? "rgba(13,148,136,0.05)" : "transparent",
                    fontWeight: value === opt ? 700 : 500,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (value !== opt) e.currentTarget.style.backgroundColor = "#F8FAFC";
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
  const [view, setView] = useState<"days" | "months" | "years">("days");
  const [pickerMonth, setPickerMonth] = useState(value ? new Date(value).getMonth() : new Date().getMonth());
  const [pickerYear, setPickerYear] = useState(value ? new Date(value).getFullYear() : new Date().getFullYear());

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
      setPickerMonth(11);
      setPickerYear(pickerYear - 1);
    } else {
      setPickerMonth(pickerMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (pickerMonth === 11) {
      setPickerMonth(0);
      setPickerYear(pickerYear + 1);
    } else {
      setPickerMonth(pickerMonth + 1);
    }
  };

  const currentMonths = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <div style={{ marginBottom: 18, position: "relative", maxWidth }}>
      <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: C.slate, marginBottom: 8 }}>
        {label} {required && <span style={{ color: C.red }}>*</span>}
      </label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%", padding: "14px 16px",
          border: `2px solid ${error ? C.red : value ? C.green : C.grayBorder}`,
          borderRadius: 14, fontSize: 16, color: value ? C.slate : C.gray,
          backgroundColor: C.white, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "border-color 0.3s ease",
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
                marginTop: 8, backgroundColor: C.white, borderRadius: 18,
                boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
                border: `1px solid ${C.grayBorder}`,
                zIndex: 50, padding: "12px", minWidth: 240,
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
                      background: "none", border: "none", cursor: "pointer", 
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
                      background: "none", border: "none", cursor: "pointer", 
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
                <button
                  type="button"
                  onClick={handleToday}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontSize: 11, fontWeight: 800, color: C.teal, padding: "4px 8px"
                  }}
                >
                  Today
                </button>
                <button
                  type="button"
                  onClick={() => { setIsOpen(false); setView("days"); }}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontSize: 11, fontWeight: 800, color: C.gray, padding: "4px 8px"
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
    parentName: "", parentEmail: "", parentPhone: "", parentRelationship: "", countryOfResidence: "", 
    interestedProgram: "", heardFrom: "",
    aadhaarNumber: "", hasCompletedPreschool: false,
    batchTiming: "", agreeTerms: false,
  });

  const fieldRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToNextField = (currentField: string) => {
    const stepFields = [
      ["studentName", "dateOfBirth", "gender", "grade", "aadhaarNumber"],
      ["parentName", "parentRelationship", "parentEmail", "parentPhone", "countryOfResidence", "heardFrom"],
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
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        padding: "100px 24px 80px", backgroundColor: C.bgPage,
      }}>
        <motion.div
          variants={successVariants} initial="initial" animate="animate"
          style={{
            textAlign: "center", backgroundColor: C.bgCard,
            padding: "60px 48px", borderRadius: 28,
            boxShadow: "0 25px 60px rgba(0,0,0,0.06)",
            maxWidth: 500, width: "100%",
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{
              width: 100, height: 100, borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 28px", boxShadow: `0 15px 40px rgba(13,148,136,0.3)`,
            }}
          >
            <Check size={48} color={C.white} strokeWidth={3} />
          </motion.div>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: C.tealDark, marginBottom: 12 }}>
            Application Submitted!
          </h2>
          <p style={{ fontSize: 17, color: C.gray, lineHeight: 1.7, marginBottom: 32 }}>
            Thank you for enrolling with ZeeQue Plus. Our team will review your application and contact you within 24–48 hours.
          </p>
          <motion.div
            style={{
              display: "inline-flex", gap: 8, alignItems: "center",
              padding: "10px 24px", backgroundColor: "rgba(13,148,136,0.08)",
              borderRadius: 100, color: C.tealDeep, fontWeight: 700, fontSize: 14
            }}
          >
            <Sparkles size={16} /> A confirmation email has been sent
          </motion.div>
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
        <div style={{ textAlign: "center", marginBottom: 40 }}>
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

                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 18 }}>
                  <div style={{ flex: "1 1 65%", minWidth: 280 }} ref={el => { fieldRefs.current.studentName = el; }}>
                    <FormField
                      label="Student Full Name" name="studentName"
                      placeholder="Enter legal name"
                      value={formData.studentName} error={errors.studentName}
                      onChange={handleChange}
                      onComplete={() => scrollToNextField("studentName")}
                    />
                  </div>
                  <div style={{ flex: "1 1 30%", minWidth: 180 }} ref={el => { fieldRefs.current.dateOfBirth = el; }}>
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
                    placeholder="xxxx xxxx xxxx"
                    value={formData.aadhaarNumber} error={errors.aadhaarNumber}
                    onChange={handleChange} required={false}
                    onComplete={() => scrollToNextField("aadhaarNumber")}
                  />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <motion.label
                    whileHover={{ scale: 1.01 }}
                    style={{
                      display: "flex", alignItems: "center", gap: 16,
                      padding: "20px 24px", borderRadius: 20,
                      border: `2px solid ${formData.hasCompletedPreschool ? C.teal : C.grayBorder}`,
                      backgroundColor: formData.hasCompletedPreschool ? "rgba(13,148,136,0.04)" : "rgba(248, 250, 252, 0.5)",
                      cursor: "pointer", transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      onClick={() => handleChange("hasCompletedPreschool", !formData.hasCompletedPreschool)}
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
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
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
                    options={RELATIONSHIP_OPTIONS} placeholder="Select (Father, Mother, Guardian)"
                    value={formData.parentRelationship} error={errors.parentRelationship}
                    onChange={handleChange}
                    onComplete={() => scrollToNextField("parentRelationship")}
                  />
                </div>

                <div ref={el => { fieldRefs.current.parentPhone = el; }}>
                  <FormField
                    label="Mobile Number" name="parentPhone" type="tel"
                    placeholder="e.g. +91 9876 543 210"
                    value={formData.parentPhone} error={errors.parentPhone}
                    onChange={handleChange}
                    onComplete={() => scrollToNextField("parentPhone")}
                  />
                </div>

                <div ref={el => { fieldRefs.current.parentEmail = el; }}>
                  <FormField
                    label="Email Address" name="parentEmail" type="email"
                    placeholder="e.g. name@example.com"
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
                    display: "grid", gridTemplateColumns: "1fr 1fr",
                    gap: 12,
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
                            padding: "20px 16px", borderRadius: 18, cursor: "pointer",
                            border: `2px solid ${selected ? C.teal : C.grayBorder}`,
                            backgroundColor: selected ? C.tealDark : C.white,
                            color: selected ? C.white : C.slate,
                            display: "flex", flexDirection: "column", alignItems: "center",
                            gap: 8, transition: "all 0.3s ease",
                            boxShadow: selected ? `0 8px 25px rgba(13,148,136,0.2)` : "0 2px 8px rgba(0,0,0,0.04)",
                          }}
                        >
                          <batch.Icon size={26} strokeWidth={1.8} color={selected ? C.white : C.teal} />
                          <span style={{ fontWeight: 700, fontSize: 15 }}>{batch.label}</span>
                          <span style={{ fontSize: 12, opacity: 0.8 }}>{batch.time}</span>
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
                    whileHover={{ scale: 1.01 }}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 14,
                      padding: "16px 20px", borderRadius: 16,
                      border: `2px solid ${errors.agreeTerms ? C.red : formData.agreeTerms ? C.green : C.grayBorder}`,
                      backgroundColor: formData.agreeTerms ? "rgba(13,148,136,0.04)" : C.white,
                      cursor: "pointer", transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      onClick={() => {
                        handleChange("agreeTerms", !formData.agreeTerms);
                        if (!formData.agreeTerms) setTimeout(() => scrollToNextField("agreeTerms"), 100);
                      }}
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
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                            <Check size={14} color={C.white} strokeWidth={3} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div>
                      <span style={{ fontSize: 15, fontWeight: 600, color: C.slate }}>
                        I agree to the Terms & Conditions <span style={{ color: C.red }}>*</span>
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
              <motion.div key="step3" variants={stepVariants} initial="initial" animate="animate" exit="exit">
                <h3 style={{ fontSize: 24, fontWeight: 800, color: C.tealDeep, marginBottom: 28 }}>
                  Payment Details
                </h3>

                {/* Order Summary Box */}
                <div style={{
                  backgroundColor: "rgba(13,148,136,0.05)",
                  padding: "32px 20px 20px", borderRadius: 20, border: `1.5px solid rgba(13,148,136,0.1)`,
                  marginBottom: 24, position: "relative", overflow: "hidden"
                }}>
                  <div style={{ position: "absolute", top: 0, right: 0, padding: "8px 16px", backgroundColor: C.teal, color: C.white, fontSize: 11, fontWeight: 800, borderBottomLeftRadius: 12, textTransform: "uppercase", letterSpacing: 1 }}>
                    Summary
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span style={{ color: C.gray, fontSize: 14, fontWeight: 600 }}>Program</span>
                    <span style={{ color: C.slate, fontSize: 15, fontWeight: 700 }}>
                      {formData.interestedProgram || "ZeeQue Plus Quran"}
                    </span>
                  </div>
                  <div style={{ height: 1, backgroundColor: "rgba(13,148,136,0.1)", marginBottom: 16 }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <div>
                      <span style={{ color: C.teal, fontSize: 16, fontWeight: 700, display: "block" }}>Total Payable</span>
                      <span style={{ color: C.gray, fontSize: 12, fontWeight: 600 }}>(Fee for June month)</span>
                    </div>
                    <span style={{ color: C.teal, fontSize: 28, fontWeight: 900 }}>₹2,500</span>
                  </div>
                </div>

                <label style={{ display: "block", fontSize: 13, fontWeight: 800, color: C.slate, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>
                  Select Payment Method <span style={{ color: C.red }}>*</span>
                </label>

                {/* Razorpay Selection Card */}
                <motion.div
                  whileHover={{ scale: 1.01, borderColor: C.teal }}
                  whileTap={{ scale: 0.99 }}
                  style={{
                    backgroundColor: "rgba(13,148,136,0.02)",
                    border: `2px solid ${C.teal}`,
                    borderRadius: 20, padding: "24px 28px", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    boxShadow: "0 10px 30px rgba(13,148,136,0.08)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div style={{
                      backgroundColor: C.white, padding: "10px 14px", borderRadius: 12,
                      boxShadow: "0 4px 15px rgba(0,0,0,0.06)", border: `1px solid ${C.grayBorder}`
                    }}>
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" 
                        alt="Razorpay" 
                        style={{ height: 26 }}
                        onError={(e) => {
                          e.currentTarget.src = "https://razorpay.com/assets/razorpay-glyph.svg";
                        }}
                      />
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: C.slate }}>Razorpay</div>
                      <div style={{ fontSize: 13, color: C.gray, fontWeight: 600 }}>UPI, Cards, Wallets & Netbanking</div>
                    </div>
                  </div>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%", border: `2.5px solid ${C.teal}`,
                    display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: C.white
                  }}>
                    <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: C.teal }} />
                  </div>
                </motion.div>
                
                {/* Simplified Trust Text */}
                <div style={{ 
                  display: "flex", alignItems: "center", gap: 6, 
                  marginTop: 12, color: C.gray, paddingLeft: 8
                }}>
                  <Lock size={12} color={C.gray} />
                  <span style={{ fontSize: 12, fontWeight: 600 }}>Secure 256-bit encrypted payment via Razorpay</span>
                </div>


              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Navigation Buttons ── */}
          <div style={{
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
                  padding: "14px 28px", borderRadius: 14, fontSize: 16, fontWeight: 700,
                  border: `2px solid ${C.orange}`, backgroundColor: "transparent",
                  color: C.orange, cursor: "pointer", display: "flex",
                  alignItems: "center", gap: 8, transition: "all 0.3s ease",
                }}
              >
                <ChevronLeft size={18} /> Back
              </motion.button>
            )}

            {currentStep < STEPS.length - 1 ? (
              <motion.button
                type="button"
                whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.97 }}
                onClick={handleNext}
                style={{
                  padding: "14px 32px", borderRadius: 14, fontSize: 16, fontWeight: 700,
                  border: "none",
                  background: `linear-gradient(135deg, ${C.tealDeep}, ${C.tealDark})`,
                  color: C.white, cursor: "pointer", display: "flex",
                  alignItems: "center", gap: 8, transition: "all 0.3s ease",
                  boxShadow: `0 8px 25px rgba(15,118,110,0.25)`,
                }}
              >
                Continue <ChevronRight size={18} />
              </motion.button>
            ) : (
              <motion.button
                type="button"
                whileHover={!submitting ? { scale: 1.03, filter: "brightness(1.1)" } : {}}
                whileTap={!submitting ? { scale: 0.97 } : {}}
                onClick={handleSubmit}
                disabled={submitting}
                style={{
                  padding: "14px 36px", borderRadius: 14, fontSize: 16, fontWeight: 700,
                  border: "none",
                  background: submitting
                    ? C.grayLight
                    : `linear-gradient(135deg, ${C.tealDeep}, ${C.tealDark})`,
                  color: C.white, cursor: submitting ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", gap: 8,
                  opacity: submitting ? 0.7 : 1,
                  transition: "all 0.3s ease",
                  boxShadow: submitting ? "none" : `0 8px 25px rgba(15,118,110,0.25)`,
                }}
              >
                {submitting ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <Loader2 size={18} />
                    </motion.div>
                    Processing...
                  </>
                ) : (
                  <>Pay Now <ChevronRight size={18} /></>
                )}
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Security Footer */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 6, marginTop: 28, color: C.gray, fontSize: 12, fontWeight: 600
        }}>
          <ShieldCheck size={14} color={C.gray} />
          <span>Your transaction is secure and encrypted</span>
        </div>
      </div>
    </section>
  );
}
