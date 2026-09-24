import { 
  Database, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  ShoppingBag, 
  CheckCircle2, 
  Lock, 
  KeyRound, 
  Code2 
} from 'lucide-react';

interface ProjectVisualProps {
  type: 'ecommerce' | 'hotel' | 'food-api' | 'portfolio';
}

export function ProjectVisual({ type }: ProjectVisualProps) {
  switch (type) {
    case 'ecommerce':
      return (
        <div className="w-full h-full bg-[#080d0a] border border-[#20E68A]/20 rounded-lg p-4 flex flex-col justify-between font-mono text-xs overflow-hidden select-none">
          {/* Mini Topbar */}
          <div className="flex items-center justify-between pb-3 border-b border-[#20E68A]/15 text-[11px]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#00C878]" />
              <span className="font-semibold text-[#F1F5F2]">StoreAdmin Dashboard</span>
              <span className="bg-[#10261B] text-[#20E68A] px-1.5 py-0.5 rounded text-[10px] border border-[#20E68A]/30">MEAN Stack</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#9AA8A0]">
              <span className="w-2 h-2 rounded-full bg-[#00C878] animate-pulse"></span>
              <span>REST Active</span>
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-2 my-3">
            <div className="bg-[#0D1511] p-2.5 rounded border border-[#20E68A]/10">
              <div className="text-[10px] text-[#9AA8A0]">Total Catalog</div>
              <div className="text-sm font-bold text-[#F1F5F2] mt-0.5">148 Products</div>
              <div className="text-[9px] text-[#20E68A] mt-0.5">✓ Filtered & Paginated</div>
            </div>
            <div className="bg-[#0D1511] p-2.5 rounded border border-[#20E68A]/10">
              <div className="text-[10px] text-[#9AA8A0]">Auth Sessions</div>
              <div className="text-sm font-bold text-[#20E68A] mt-0.5">JWT Token</div>
              <div className="text-[9px] text-[#9AA8A0] mt-0.5">Bearer Guard Active</div>
            </div>
            <div className="bg-[#0D1511] p-2.5 rounded border border-[#20E68A]/10">
              <div className="text-[10px] text-[#9AA8A0]">Cart System</div>
              <div className="text-sm font-bold text-[#F1F5F2] mt-0.5">Sync Ready</div>
              <div className="text-[9px] text-[#00C878] mt-0.5">MongoDB Persisted</div>
            </div>
          </div>

          {/* Mini Table Preview */}
          <div className="bg-[#0A100D] rounded border border-[#20E68A]/15 p-2 text-[10px]">
            <div className="flex justify-between pb-1.5 mb-1.5 border-b border-[#20E68A]/10 text-[#9AA8A0]">
              <span>API Route</span>
              <span>Status</span>
              <span>Response</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[#F1F5F2]">
                <span className="text-[#20E68A]">GET /api/v1/products</span>
                <span className="text-[9px] bg-[#10261B] text-[#20E68A] px-1 rounded">200 OK</span>
                <span className="text-[#9AA8A0]">application/json</span>
              </div>
              <div className="flex justify-between items-center text-[#F1F5F2]">
                <span className="text-[#00C878]">POST /api/v1/auth/login</span>
                <span className="text-[9px] bg-[#10261B] text-[#20E68A] px-1 rounded">200 OK</span>
                <span className="text-[#9AA8A0]">{`{ token: "jwt..." }`}</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'hotel':
      return (
        <div className="w-full h-full bg-[#080d0a] border border-[#20E68A]/20 rounded-lg p-4 flex flex-col justify-between font-mono text-xs overflow-hidden select-none">
          {/* Swagger / NestJS Topbar */}
          <div className="flex items-center justify-between pb-3 border-b border-[#20E68A]/15 text-[11px]">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#20E68A]" />
              <span className="font-semibold text-[#F1F5F2]">NestJS Modular Architecture</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] bg-[#10261B] text-[#20E68A] px-2 py-0.5 rounded border border-[#20E68A]/20">
              <ShieldCheck className="w-3 h-3" />
              <span>RBAC Enabled</span>
            </div>
          </div>

          {/* Architecture Module Grid */}
          <div className="grid grid-cols-2 gap-2 my-2.5">
            <div className="bg-[#0D1511] p-2.5 rounded border border-[#20E68A]/15">
              <div className="flex items-center gap-1.5 text-[10px] text-[#20E68A] font-semibold">
                <Lock className="w-3 h-3" />
                <span>AuthModule</span>
              </div>
              <p className="text-[10px] text-[#9AA8A0] mt-1">Passport JWT Guard & Role Strategy</p>
              <div className="mt-1.5 flex gap-1">
                <span className="bg-[#10261B] text-[9px] text-[#00C878] px-1 rounded">Admin</span>
                <span className="bg-[#10261B] text-[9px] text-[#00C878] px-1 rounded">Staff</span>
                <span className="bg-[#10261B] text-[9px] text-[#00C878] px-1 rounded">Guest</span>
              </div>
            </div>

            <div className="bg-[#0D1511] p-2.5 rounded border border-[#20E68A]/15">
              <div className="flex items-center gap-1.5 text-[10px] text-[#20E68A] font-semibold">
                <Database className="w-3 h-3" />
                <span>BookingsModule</span>
              </div>
              <p className="text-[10px] text-[#9AA8A0] mt-1">Mongoose Schemas & DTO Validation</p>
              <div className="mt-1.5 flex gap-1">
                <span className="bg-[#10261B] text-[9px] text-[#00C878] px-1 rounded">Rooms</span>
                <span className="bg-[#10261B] text-[9px] text-[#00C878] px-1 rounded">Offers</span>
                <span className="bg-[#10261B] text-[9px] text-[#00C878] px-1 rounded">Reviews</span>
              </div>
            </div>
          </div>

          {/* Swagger Endpoint Spec Snippet */}
          <div className="bg-[#0A100D] p-2 rounded border border-[#20E68A]/10 text-[10px]">
            <div className="flex items-center justify-between text-[#9AA8A0] text-[9px] mb-1">
              <span>OpenAPI Specification</span>
              <span className="text-[#00C878]">Swagger v3</span>
            </div>
            <div className="flex items-center gap-2 text-[#F1F5F2]">
              <span className="bg-[#00C878]/20 text-[#00C878] px-1.5 py-0.5 rounded font-bold text-[9px]">POST</span>
              <span className="text-[#9AA8A0]">/api/v1/bookings</span>
              <span className="ml-auto text-[9px] text-[#20E68A]">@UseGuards(JwtAuth)</span>
            </div>
          </div>
        </div>
      );

    case 'food-api':
      return (
        <div className="w-full h-full bg-[#080d0a] border border-[#20E68A]/20 rounded-lg p-4 flex flex-col justify-between font-mono text-xs overflow-hidden select-none">
          {/* Terminal / Postman Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#20E68A]/15 text-[11px]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#20E68A]" />
              <span className="font-semibold text-[#F1F5F2]">REST Engine & OTP Pipeline</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-[#9AA8A0]">
              <span className="text-[#00C878]">Vercel</span>
              <span>+</span>
              <span className="text-[#00C878]">MongoDB Atlas</span>
            </div>
          </div>

          {/* Terminal Curl Request & Response */}
          <div className="bg-[#060A08] p-3 rounded border border-[#20E68A]/15 my-2 space-y-2">
            <div className="flex items-center gap-2 text-[11px]">
              <span className="text-[#20E68A] font-bold">curl</span>
              <span className="text-[#9AA8A0]">-X POST /api/v1/auth/verify-otp \</span>
            </div>
            <div className="text-[10px] text-[#9AA8A0] pl-3">
              -d <span className="text-[#20E68A]">{`'{"email":"user@domain.com","otp":"849201"}'`}</span>
            </div>
            <div className="border-t border-[#20E68A]/10 pt-2 flex items-center justify-between text-[10px]">
              <div className="flex items-center gap-1.5 text-[#00C878]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="font-semibold">HTTP/1.1 200 OK</span>
              </div>
              <span className="text-[9px] text-[#9AA8A0]">Joi Validated • Bcrypt Verified</span>
            </div>
          </div>

          {/* Security Features Bar */}
          <div className="flex items-center justify-between text-[10px] text-[#9AA8A0] pt-1">
            <div className="flex items-center gap-1">
              <KeyRound className="w-3 h-3 text-[#20E68A]" />
              <span>Timed Expiry OTP</span>
            </div>
            <div className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#20E68A]" />
              <span>Role Permissions</span>
            </div>
          </div>
        </div>
      );

    case 'portfolio':
      return (
        <div className="w-full h-full bg-[#080d0a] border border-[#20E68A]/20 rounded-lg p-4 flex flex-col justify-between font-mono text-xs overflow-hidden select-none">
          {/* Topbar */}
          <div className="flex items-center justify-between pb-3 border-b border-[#20E68A]/15 text-[11px]">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#20E68A]" />
              <span className="font-semibold text-[#F1F5F2]">Angular SPA Architecture</span>
            </div>
            <span className="bg-[#10261B] text-[#00C878] px-2 py-0.5 rounded text-[10px] border border-[#20E68A]/20">MEAN Architecture</span>
          </div>

          {/* Component Tree Visualization */}
          <div className="my-2.5 space-y-1.5">
            <div className="bg-[#0D1511] p-2 rounded border border-[#20E68A]/10 flex items-center justify-between">
              <span className="text-[#F1F5F2] text-[11px]">&lt;app-root&gt;</span>
              <span className="text-[9px] text-[#9AA8A0]">Router-Outlet</span>
            </div>
            <div className="pl-3 space-y-1 border-l-2 border-[#20E68A]/20">
              <div className="bg-[#0A100D] p-1.5 rounded border border-[#20E68A]/10 flex items-center justify-between text-[10px]">
                <span className="text-[#20E68A]">&lt;project-showcase [data]="items"&gt;</span>
                <span className="text-[#9AA8A0] text-[9px]">Reusable Component</span>
              </div>
              <div className="bg-[#0A100D] p-1.5 rounded border border-[#20E68A]/10 flex items-center justify-between text-[10px]">
                <span className="text-[#00C878]">BackendService.getProjects()</span>
                <span className="text-[#9AA8A0] text-[9px]">RxJS Observable</span>
              </div>
            </div>
          </div>

          {/* Data Flow Badge */}
          <div className="bg-[#0A100D] p-2 rounded border border-[#20E68A]/15 flex items-center justify-between text-[10px]">
            <span className="text-[#9AA8A0]">Data Source:</span>
            <span className="text-[#20E68A] font-semibold">Express.js API → MongoDB Atlas</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
