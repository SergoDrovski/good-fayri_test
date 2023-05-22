"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[3650],{17316:(it,J,t)=>{t.r(J),t.d(J,{default:()=>we});var e=t(67294),R=t(49656),A=t(97132),Ee=t(15482),g=t(95489),n=t(28702),z=t(71893),X=t(80129),v=t(41363),he=t(33012),ye=t(78971),ve=t(80845),Ce=t(92585),Me=t(24652),Fe=t(11357),Se=t(27954),Be=t(45697),f=t.n(Be);const Z=({pagination:s})=>e.createElement(n.Box,{paddingTop:6},e.createElement(n.Flex,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(g.PageSizeURLQuery,null),e.createElement(g.PaginationURLQuery,{pagination:s})));Z.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},Z.propTypes={pagination:f().shape({page:f().number,pageCount:f().number,pageSize:f().number,total:f().number})};var p=t(49826),Le=t(15537),Ae=t(2967);const Y=({selected:s,onSuccess:l})=>{const{formatMessage:r}=(0,A.useIntl)(),[i,d]=(0,e.useState)(!1),{isLoading:c,remove:h}=(0,Ae.K)(),E=async()=>{await h(s),l()};return e.createElement(e.Fragment,null,e.createElement(n.Button,{variant:"danger-light",size:"S",startIcon:e.createElement(v.Trash,null),onClick:()=>d(!0)},r({id:"global.delete",defaultMessage:"Delete"})),e.createElement(g.ConfirmDialog,{isConfirmButtonLoading:c,isOpen:i,onToggleDialog:()=>d(!1),onConfirm:E}))};Y.propTypes={selected:f().arrayOf(p.pw,p.nx).isRequired,onSuccess:f().func.isRequired};var be=t(80831),Ie=t(41609),Te=t.n(Ie),q=t(23724),D=t(55994),u=t(57197);const Re=()=>{const s=(0,g.useNotification)(),l=(0,q.useQueryClient)(),r=(0,u.IF)("actions/bulk-move"),{post:i}=(0,g.useFetchClient)(),d=({destinationFolderId:E,filesAndFolders:m})=>{const C=m.reduce((y,o)=>{const{id:b,type:S}=o,T=S==="asset"?"fileIds":"folderIds";return y[T]||(y[T]=[]),y[T].push(b),y},{});return i(r,{...C,destinationFolderId:E})},c=(0,q.useMutation)(d,{onSuccess(E){const{data:{data:m}}=E;m?.files?.length>0&&(l.refetchQueries([D.Z,"assets"],{active:!0}),l.refetchQueries([D.Z,"asset-count"],{active:!0})),l.refetchQueries([D.Z,"folders"],{active:!0}),s({type:"success",message:{id:(0,u.OB)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}});return{...c,move:(E,m)=>c.mutateAsync({destinationFolderId:E,filesAndFolders:m})}};var De=t(66951),Oe=t(20796);const V=({onClose:s,selected:l,currentFolder:r})=>{const{formatMessage:i}=(0,A.useIntl)(),{data:d,isLoading:c}=(0,Oe.v)(),{move:h}=Re();if(!d)return null;const E=async(y,{setErrors:o})=>{try{await h(y.destination.value,l),s()}catch(b){const T=(0,g.normalizeAPIError)(b).errors.reduce((x,B)=>(x[B.values?.path?.length||"destination"]=B.defaultMessage,x),{});Te()(T)||o(T)}},m=()=>{s()};if(c)return e.createElement(n.ModalLayout,{onClose:m,labelledBy:"title"},e.createElement(n.ModalBody,null,e.createElement(n.Flex,{justifyContent:"center",paddingTop:4,paddingBottom:4},e.createElement(n.Loader,null,i({id:(0,u.OB)("content.isLoading"),defaultMessage:"Content is loading."})))));const C={destination:{value:r?.id||"",label:r?.name||d[0].label}};return e.createElement(n.ModalLayout,{onClose:m,labelledBy:"title"},e.createElement(be.Formik,{validateOnChange:!1,onSubmit:E,initialValues:C},({values:y,errors:o,setFieldValue:b})=>e.createElement(g.Form,{noValidate:!0},e.createElement(n.ModalHeader,null,e.createElement(n.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},i({id:(0,u.OB)("modal.folder.move.title"),defaultMessage:"Move elements to"}))),e.createElement(n.ModalBody,null,e.createElement(n.Grid,{gap:4},e.createElement(n.GridItem,{xs:12,col:12},e.createElement(n.Stack,{spacing:1},e.createElement(n.FieldLabel,{htmlFor:"folder-destination"},i({id:(0,u.OB)("form.input.label.folder-location"),defaultMessage:"Location"})),e.createElement(De.Z,{options:d,onChange:S=>{b("destination",S)},defaultValue:y.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:o?.destination,ariaErrorMessage:"destination-error"}),o.destination&&e.createElement(n.Typography,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600"},o.destination))))),e.createElement(n.ModalFooter,{startActions:e.createElement(n.Button,{onClick:m,variant:"tertiary",name:"cancel"},i({id:"cancel",defaultMessage:"Cancel"})),endActions:e.createElement(n.Button,{type:"submit",loading:c},i({id:"modal.folder.move.submit",defaultMessage:"Move"}))}))))};V.defaultProps={currentFolder:void 0},V.propTypes={onClose:f().func.isRequired,currentFolder:p.nx,selected:f().arrayOf(p.nx,p.pw).isRequired};const $=({selected:s,onSuccess:l,currentFolder:r})=>{const{formatMessage:i}=(0,A.useIntl)(),[d,c]=(0,e.useState)(!1),h=()=>{c(!1),l()};return e.createElement(e.Fragment,null,e.createElement(n.Button,{variant:"secondary",size:"S",startIcon:e.createElement(v.Folder,null),onClick:()=>c(!0)},i({id:"global.move",defaultMessage:"Move"})),d&&e.createElement(V,{currentFolder:r,onClose:h,selected:s}))};$.defaultProps={currentFolder:void 0},$.propTypes={onSuccess:f().func.isRequired,currentFolder:p.nx,selected:f().arrayOf(p.pw,p.nx).isRequired};const G=({selected:s,onSuccess:l,currentFolder:r})=>{const{formatMessage:i}=(0,A.useIntl)();return e.createElement(n.Stack,{horizontal:!0,spacing:2,paddingBottom:5},e.createElement(n.Typography,{variant:"epsilon",textColor:"neutral600"},i({id:(0,Le.Z)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:s.filter(({type:d})=>d==="folder").length,numberAssets:s.filter(({type:d})=>d==="asset").length})),e.createElement(Y,{selected:s,onSuccess:l}),e.createElement($,{currentFolder:r,selected:s,onSuccess:l}))};G.defaultProps={currentFolder:void 0},G.propTypes={onSuccess:f().func.isRequired,currentFolder:p.nx,selected:f().arrayOf(p.pw,p.nx).isRequired};var xe=t(70088);const Pe=({isFiltering:s,canCreate:l,canRead:r})=>s?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:r?l?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},_=({canCreate:s,isFiltering:l,canRead:r,onActionClick:i})=>{const{formatMessage:d}=(0,A.useIntl)(),c=Pe({isFiltering:l,canCreate:s,canRead:r});return e.createElement(xe.i,{icon:r?null:v.EmptyPermissions,action:s&&!l&&e.createElement(n.Button,{variant:"secondary",startIcon:e.createElement(v.Plus,null),onClick:i},d({id:(0,u.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})),content:d({...c,id:(0,u.OB)(c.id)})})};_.propTypes={canCreate:f().bool.isRequired,canRead:f().bool.isRequired,isFiltering:f().bool.isRequired,onActionClick:f().func.isRequired};var O=t(98101),Ue=t(51386),ke=t(45219),ee=t(97581);const Qe=()=>{const s=(0,e.useRef)(null),[l,r]=(0,e.useState)(!1),{formatMessage:i}=(0,A.useIntl)(),{trackUsage:d}=(0,g.useTracking)(),[{query:c},h]=(0,g.useQueryParams)(),E=c?.filters?.$and||[],m=()=>r(o=>!o),C=o=>{h({filters:{$and:o},page:1})},y=o=>{d("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(o[o.length-1])[0]}),h({filters:{$and:o},page:1})};return e.createElement(e.Fragment,null,e.createElement(n.Button,{variant:"tertiary",ref:s,startIcon:e.createElement(v.Filter,null),onClick:m,size:"S"},i({id:"app.utils.filters",defaultMessage:"Filters"})),l&&e.createElement(ke.Z,{displayedFilters:ee.Z,filters:E,onSubmit:y,onToggle:m,source:s}),e.createElement(Ue.Z,{appliedFilters:E,filtersSchema:ee.Z,onRemoveFilter:C}))};var ze=t(70168);const W=({breadcrumbs:s,canCreate:l,folder:r,onToggleEditFolderDialog:i,onToggleUploadAssetDialog:d})=>{const{formatMessage:c}=(0,A.useIntl)(),{pathname:h}=(0,R.useLocation)(),[{query:E}]=(0,g.useQueryParams)(),m={...E,folder:r?.parent?.id??void 0};return e.createElement(n.HeaderLayout,{title:c({id:(0,u.OB)("plugin.name"),defaultMessage:"Media Library"}),subtitle:s&&r&&e.createElement(ze.O,{as:"nav",label:c({id:(0,u.OB)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:s,currentFolderId:r?.id}),navigationAction:r&&e.createElement(n.Link,{startIcon:e.createElement(v.ArrowLeft,null),to:`${h}?${(0,X.stringify)(m,{encode:!1})}`},c({id:(0,u.OB)("header.actions.folder-level-up"),defaultMessage:"Back"})),primaryAction:l&&e.createElement(n.Stack,{horizontal:!0,spacing:2},e.createElement(n.Button,{startIcon:e.createElement(v.Plus,null),variant:"secondary",onClick:i},c({id:(0,u.OB)("header.actions.add-folder"),defaultMessage:"Add new folder"})),e.createElement(n.Button,{startIcon:e.createElement(v.Plus,null),onClick:d},c({id:(0,u.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})))})};W.defaultProps={breadcrumbs:!1,folder:null},W.propTypes={breadcrumbs:f().oneOfType([p.Fv,f().bool]),canCreate:f().bool.isRequired,folder:p.nx,onToggleEditFolderDialog:f().func.isRequired,onToggleUploadAssetDialog:f().func.isRequired};var Ze=t(73817),Ve=t(44466),$e=t(31817),Ge=t(42047),We=t(16838);const He=(0,z.default)(n.Box)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,te=(0,z.default)(n.Typography)`
  max-width: 100%;
`,ne=(0,z.default)(n.Box)`
  svg {
    path {
      fill: ${({theme:s})=>s.colors.neutral500};
    }
  }
`,Ne=()=>{const{push:s}=(0,R.useHistory)(),{canRead:l,canCreate:r,canUpdate:i,canCopyLink:d,canDownload:c,isLoading:h}=(0,$e.y)(),E=(0,e.useRef)(),{formatMessage:m}=(0,A.useIntl)(),{pathname:C}=(0,R.useLocation)(),{trackUsage:y}=(0,g.useTracking)(),[{query:o},b]=(0,g.useQueryParams)(),S=Boolean(o._q||o.filters),[T,x]=(0,g.usePersistentState)(p.uf.view,p.Uk.GRID),B=T===p.Uk.GRID,{data:L,isLoading:Je,errors:Xe}=(0,Ze.L)({skipWhen:!l,query:o}),{data:Ye,isLoading:qe,errors:_e}=(0,Ve.j)({enabled:l&&L?.pagination?.page===1&&!(0,u.rV)(o),query:o}),{data:H,isLoading:ae,error:et}=(0,Ge.W)(o?.folder,{enabled:l&&!!o?.folder});et?.response?.status===404&&s(C);const P=Ye?.map(a=>({...a,type:"folder",folderURL:(0,u.Km)(C,o,a.id),isSelectable:i}))??[],M=P?.length||0,U=L?.results?.map(a=>({...a,type:"asset",isSelectable:i}))||[],F=U?.length??0,tt=L?.pagination?.total,se=ae||qe||h||Je,[nt,at]=(0,e.useState)(!1),[st,oe]=(0,e.useState)(!1),[le,N]=(0,e.useState)(void 0),[j,re]=(0,e.useState)(void 0),[I,{selectOne:k,selectAll:ie}]=(0,g.useSelectionState)(["type","id"],[]),de=I?.length>0&&I?.length!==F+M,K=()=>at(a=>!a),ce=({created:a=!1}={})=>{a&&o?.page!=="1"&&b({...o,page:1}),oe(Q=>!Q)},ue=(a,Q)=>{a.target.checked&&y("didSelectAllMediaLibraryElements"),ie(Q)},me=a=>{y("didSortMediaLibraryElements",{location:"upload",sort:a}),b({sort:a})},ge=a=>{re(a),oe(!0)},ot=a=>{re(null),ce(a),E.current&&E.current.focus()},fe=a=>{a===F&&L.pagination.page===L.pagination.pageCount&&L.pagination.page>1&&b({...o,page:L.pagination.page-1})},lt=()=>{ie(),fe(I.length)};return(0,g.useFocusWhenNavigate)(),e.createElement(n.Layout,null,e.createElement(n.Main,{"aria-busy":se},e.createElement(W,{breadcrumbs:!ae&&(0,u.M4)(H,{pathname:C,query:o}),canCreate:r,onToggleEditFolderDialog:ce,onToggleUploadAssetDialog:K,folder:H}),e.createElement(n.ActionLayout,{startActions:e.createElement(e.Fragment,null,i&&B&&(F>0||M>0)&&e.createElement(He,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},e.createElement(n.BaseCheckbox,{"aria-label":m({id:(0,u.OB)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:de,value:(F>0||M>0)&&I.length===F+M,onChange:a=>ue(a,[...U,...P])})),l&&B&&e.createElement(Se.Z,{onChangeSort:me}),l&&e.createElement(Qe,null)),endActions:e.createElement(e.Fragment,null,e.createElement(g.CheckPermissions,{permissions:We.Z.configureView},e.createElement(ne,{paddingTop:1,paddingBottom:1},e.createElement(n.IconButton,{forwardedAs:R.Link,to:{pathname:`${C}/configuration`,search:(0,X.stringify)(o,{encode:!1})},icon:e.createElement(v.Cog,null),label:m({id:"app.links.configure-view",defaultMessage:"Configure the view"})}))),e.createElement(ne,{paddingTop:1,paddingBottom:1},e.createElement(n.IconButton,{icon:B?e.createElement(v.List,null):e.createElement(v.Grid,null),label:m(B?{id:"view-switch.list",defaultMessage:"List View"}:{id:"view-switch.grid",defaultMessage:"Grid View"}),onClick:()=>x(B?p.Uk.LIST:p.Uk.GRID)})),e.createElement(g.SearchURLQuery,{label:m({id:(0,u.OB)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}}))}),e.createElement(n.ContentLayout,null,I.length>0&&e.createElement(G,{currentFolder:H,selected:I,onSuccess:lt}),se&&e.createElement(g.LoadingIndicatorPage,null),(Xe||_e)&&e.createElement(g.AnErrorOccurred,null),M===0&&F===0&&e.createElement(_,{canCreate:r,canRead:l,isFiltering:S,onActionClick:K}),l&&!B&&(F>0||M>0)&&e.createElement(Fe.b,{assetCount:F,folderCount:M,indeterminate:de,onChangeSort:me,onChangeFolder:a=>s((0,u.Km)(C,o,a)),onEditAsset:N,onEditFolder:ge,onSelectOne:k,onSelectAll:ue,rows:[...P,...U],selected:I,shouldDisableBulkSelect:!i,sortQuery:o?.sort??""}),l&&B&&e.createElement(e.Fragment,null,M>0&&e.createElement(Me.a,{title:(S&&F>0||!S)&&m({id:(0,u.OB)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:M})||""},P.map(a=>{const rt=!!I.filter(({type:w})=>w==="folder").find(w=>w.id===a.id),pe=(0,u.Km)(C,o,a?.id);return e.createElement(n.GridItem,{col:3,key:`folder-${a.id}`},e.createElement(O.Ac,{ref:j&&a.id===j.id?E:void 0,ariaLabel:a.name,id:`folder-${a.id}`,to:pe,startAction:k&&a.isSelectable?e.createElement(O.MM,{"data-testid":`folder-checkbox-${a.id}`,value:rt,onChange:()=>k(a)}):null,cardActions:e.createElement(n.IconButton,{icon:e.createElement(v.Pencil,null),"aria-label":m({id:(0,u.OB)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>ge(a)})},e.createElement(O.Bu,null,e.createElement(O.u6,{to:pe},e.createElement(n.Flex,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%"},e.createElement(te,{fontWeight:"semiBold",ellipsis:!0},a.name,e.createElement(n.VisuallyHidden,null,":")),e.createElement(te,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0},m({id:(0,u.OB)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:a.children.count,filesCount:a.files.count})))))))})),F>0&&M>0&&e.createElement(n.Box,{paddingTop:6,paddingBottom:4},e.createElement(n.Divider,null)),F>0&&e.createElement(Ce.r,{assets:U,onEditAsset:N,onSelectAsset:k,selectedAssets:I.filter(({type:a})=>a==="asset"),title:(!S||S&&M>0)&&L?.pagination?.page===1&&m({id:(0,u.OB)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:tt})||""})),L?.pagination&&e.createElement(Z,{pagination:L.pagination}))),nt&&e.createElement(he.x,{onClose:K,trackedLocation:"upload",folderId:o?.folder}),st&&e.createElement(ye.f,{onClose:ot,folder:j,parentFolderId:o?.folder,location:"upload"}),le&&e.createElement(ve.s,{onClose:a=>{a===null&&fe(1),N(void 0)},asset:le,canUpdate:i,canCopyLink:d,canDownload:c,trackedLocation:"upload"}))};var je=t(60862);const Ke=(0,e.lazy)(()=>t.e(9514).then(t.bind(t,87532))),we=()=>{const{config:{isLoading:s,isError:l,data:r}}=(0,je.Z)(),[{rawQuery:i},d]=(0,g.useQueryParams)(),{formatMessage:c}=(0,A.useIntl)(),h=c({id:(0,u.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,e.useEffect)(()=>{s||l||i||d({sort:r.sort,page:1,pageSize:r.pageSize})},[s,l,r,i,d]),(0,g.useFocusWhenNavigate)(),e.createElement(n.Main,{"aria-busy":s},e.createElement(Ee.Helmet,{title:h}),s&&e.createElement(g.LoadingIndicatorPage,null),i?e.createElement(e.Suspense,{fallback:e.createElement(g.LoadingIndicatorPage,null)},e.createElement(R.Switch,null,e.createElement(R.Route,{exact:!0,path:`/plugins/${D.Z}`,component:Ne}),e.createElement(R.Route,{exact:!0,path:`/plugins/${D.Z}/configuration`,render:()=>e.createElement(Ke,{config:r})}))):null)}}}]);