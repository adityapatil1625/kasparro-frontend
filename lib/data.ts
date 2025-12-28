import { AuditData, AuditModule, Brand, DashboardSnapshot, ArchitectureModule } from '@/types';
import path from 'path';
import { promises as fs } from 'fs';

// Function to load all audit modules from the data/audit-data directory
export async function loadAuditData(): Promise<AuditData> {
  const auditData: AuditData = {};
  const dataDirectory = path.join(process.cwd(), 'data', 'audit-data');
  const filenames = await fs.readdir(dataDirectory);

  for (const filename of filenames) {
    if (filename.endsWith('.json')) {
      const filePath = path.join(dataDirectory, filename);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const moduleData: AuditModule = JSON.parse(fileContents);
      auditData[moduleData.id] = moduleData;
    }
  }
  return auditData;
}

// Mock brand data
export async function loadBrands(): Promise<Brand[]> {
  const filePath = path.join(process.cwd(), 'data', 'brands.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Mock dashboard snapshot data
export async function loadDashboardSnapshot(): Promise<DashboardSnapshot> {
  const filePath = path.join(process.cwd(), 'data', 'dashboard-snapshot.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Mock architecture data
export async function loadArchitectureModules(): Promise<ArchitectureModule[]> {
  const filePath = path.join(process.cwd(), 'data', 'architecture.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}
