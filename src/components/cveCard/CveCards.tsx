/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Tag, Tooltip, Typography } from "antd";
import "tailwindcss/tailwind.css";

const { Title, Text } = Typography;

// Define the CVE interface
interface CVE {
  api_created: string;
  api_last_modified: string;
  configurations: any[];
  epss_percentile: number;
  epss_score: number;
  metrics: any | null;
  name: string;
  references: string[];
  severity: number;
  weaknesses: any[];
}

interface CVECardProps {
  cve: CVE;
}

const CVECard: React.FC<CVECardProps> = ({ cve }) => {
  return (
    <div className="shadow-lg rounded-lg bg-white p-4 m-4">
      <div className="flex justify-between items-center gap-4 overflow-y-auto">
        <div className="mb-4">
          <Title level={4} className="text-gray-800">
            {cve.name}
          </Title>
          <Tag color={getSeverityColor(cve.severity)} className="text-sm">
            Severity: {cve.severity}
          </Tag>
        </div>
        <div className="mb-4">
          <Text className="block text-gray-600">
            <strong>Created:</strong>{" "}
            {new Date(cve.api_created).toLocaleDateString()}
          </Text>
          <Text className="block text-gray-600">
            <strong>Last Modified:</strong>{" "}
            {new Date(cve.api_last_modified).toLocaleDateString()}
          </Text>
        </div>
        <div className="mb-4">
          <Text className="block text-gray-600">
            <strong>EPSS Score:</strong> {cve.epss_score?.toFixed(5)}
          </Text>
          <Text className="block text-gray-600">
            <strong>EPSS Percentile:</strong>{" "}
            {cve.epss_percentile ? Math.round(cve.epss_percentile * 100) : 0}%
          </Text>
        </div>
      </div>
      <div>
        <Text className="block text-gray-800 mb-2">
          <strong>References:</strong>
        </Text>
        <div className="flex flex-row flex-wrap">
          {cve.references.length > 0 ? (
            cve.references.map((ref, index) => (
              <Tooltip title={ref}>
                <a
                  href={ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 p-1 rounded-md m-1"
                >
                  ref-{index + 1}
                </a>
              </Tooltip>
            ))
          ) : (
            <div className="text-gray-500">No references available</div>
          )}
        </div>
      </div>
    </div>
  );
};

// Function to determine severity color based on the severity score
const getSeverityColor = (severity: number): string => {
  if (severity >= 9) return "red";
  if (severity >= 7) return "orange";
  if (severity >= 4) return "gold";
  return "green";
};

export default CVECard;
