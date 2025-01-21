/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
export interface CVE {
  api_created: string; // The date and time when the CVE was created (ISO format).
  api_last_modified: string; // The date and time when the CVE was last modified (ISO format).
  configurations: any[]; // Array of configurations (can be typed if the structure is known).
  epss_percentile: number; // EPSS percentile (e.g., 0.293).
  epss_score: number; // EPSS score (e.g., 0.00063).
  metrics: Metrics | null; // Metrics object or null (structure defined below).
  name: string; // The CVE ID, e.g., "CVE-2023-52389".
  references: string[]; // Array of reference URLs.
  severity: number; // Severity score (e.g., 9).
  weaknesses: any[]; // Array of weaknesses (can be typed if the structure is known).
}

interface Metrics {
  version?: string;
  vectorString?: string;
  attackVector?: string;
  attackComplexity?: string;
  privilegesRequired?: string;
  userInteraction?: string;
  scope?: string;
  confidentialityImpact?: string;
  integrityImpact?: string;
  availabilityImpact?: string;
  baseScore?: number;
  baseSeverity?: string;
  exploitCodeMaturity?: string;
  remediationLevel?: string;
  reportConfidence?: string;
  temporalScore?: number;
  temporalSeverity?: string;
  confidentialityRequirement?: string;
  integrityRequirement?: string;
  availabilityRequirement?: string;
  modifiedAttackVector?: string;
  modifiedAttackComplexity?: string;
  modifiedPrivilegesRequired?: string;
  modifiedUserInteraction?: string;
  modifiedScope?: string;
  modifiedConfidentialityImpact?: string;
  modifiedIntegrityImpact?: string;
  modifiedAvailabilityImpact?: string;
  environmentalScore?: number;
  environmentalSeverity?: string;
}
