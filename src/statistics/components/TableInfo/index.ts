import { TableStructureHOCProps } from '../../../interfaces';
import { TableStructure as TableStructureHOC } from './TableStructure';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';
import { TableResult } from './TableResult';
import { TableTitle } from './TableTitle';

export const TableStructure: TableStructureHOCProps = Object.assign(
  TableStructureHOC,
  {
    Title: TableTitle,
    Header: TableHeader,
    Body: TableBody,
    Result: TableResult,
  },
);
