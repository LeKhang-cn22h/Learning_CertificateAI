import type { ID } from "@/src/types/common"

export type CredentialType =
  | "Professional Certificate"
  | "Certification Prep"
  | "Continuing Education"
  | "Academic Credit"

export type CertLevel = "Beginner" | "Intermediate" | "Advanced"

export type CertCategory = "technology" | "business" | "creative" | "security"

export interface CredentialTypeItem {
  label: string
  value: string
  icon:  string
  desc:  string
}

export interface CertProviderItem {
  label: string
  value: string
  logo:  string
  color: string
}

export interface Certification {
  id:             ID
  title:          string
  provider:       string
  providerLogo:   string
  credentialType: CredentialType
  category:       CertCategory
  courseCount:    number
  duration:       string
  level:          CertLevel
  rating:         number
  reviewCount:    number
  description:    string
  skills:         string[]
  isNew?:         boolean
  isFeatured?:    boolean
  examCode?:      string | null
}

export interface CertificationsData {
  credentialTypes: CredentialTypeItem[]
  providers:       CertProviderItem[]
  certifications:  Certification[]
}