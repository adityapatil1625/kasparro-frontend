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

// Load brand data from JSON file
export async function loadBrands(): Promise<Brand[]> {
  const filePath = path.join(process.cwd(), 'data', 'brands.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const brands: Brand[] = JSON.parse(fileContents);
  return brands;
}

// Load dashboard snapshot data for a specific brand
export async function loadDashboardSnapshot(brandId: string): Promise<DashboardSnapshot> {
  const filePath = path.join(process.cwd(), 'data', `${brandId}-snapshot.json`);
  const fileContents = await fs.readFile(filePath, 'utf8');
  const snapshot: DashboardSnapshot = JSON.parse(fileContents);
  return snapshot;
}

// Load architecture module data
export async function loadArchitectureModules(): Promise<ArchitectureModule[]> {
  const filePath = path.join(process.cwd(), 'data', 'architecture.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const modules: ArchitectureModule[] = JSON.parse(fileContents);
  return modules;
}
