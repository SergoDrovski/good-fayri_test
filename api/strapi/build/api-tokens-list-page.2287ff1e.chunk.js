"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[8056],{8421:(_,M,i)=>{i.r(M),i.d(M,{default:()=>z});var e=i(67294),t=i(95489),R=i(87751),E=i(97132),h=i(23724),A=i(49656),U=i(80129),V=i.n(U),a=i(28702),f=i(41363);const $=[{name:"name",key:"name",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}];var x=i(45697),n=i.n(x);const S=({tokenName:l,onClickDelete:s})=>{const{formatMessage:d}=(0,E.useIntl)(),{trackUsage:u}=(0,t.useTracking)();return e.createElement(a.Box,{paddingLeft:1,...t.stopPropagation},e.createElement(a.IconButton,{onClick:()=>{u("willDeleteToken"),s()},label:d({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${l}`}),name:"delete",noBorder:!0,icon:e.createElement(f.Trash,null)}))};S.propTypes={tokenName:n().string.isRequired,onClickDelete:n().func.isRequired};const F=S;var H=i(71893);const O={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},Q=(0,H.default)(t.Link)`
  svg {
    path {
      fill: ${({theme:l})=>l.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:l})=>l.colors.neutral800};
      }
    }
  }
`,b=({tokenName:l,tokenId:s,buttonType:d,children:u})=>{const{formatMessage:p}=(0,E.useIntl)(),{location:{pathname:g}}=(0,A.useHistory)();return e.createElement(Q,{to:`${g}/${s}`,title:p(O[d],{target:l})},u)};b.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired,buttonType:n().string,children:n().node.isRequired},b.defaultProps={buttonType:"edit"};const P=b,B=({tokenName:l,tokenId:s})=>e.createElement(P,{tokenName:l,tokenId:s},e.createElement(f.Pencil,null));B.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};const W=B,I=({tokenName:l,tokenId:s})=>e.createElement(P,{tokenName:l,tokenId:s,buttonType:"read"},e.createElement(f.Eye,null));I.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};const G=I,C=({canDelete:l,canUpdate:s,canRead:d,onClickDelete:u,withBulkActions:p,rows:g})=>{const[{query:c}]=(0,t.useQueryParams)(),[,T]=c.sort.split(":"),{push:y,location:{pathname:D}}=(0,A.useHistory)(),{trackUsage:k}=(0,t.useTracking)(),w=g.sort((o,L)=>{const m=o.name.localeCompare(L.name);return T==="DESC"?-m:m});return e.createElement(a.Tbody,null,w.map(o=>e.createElement(a.Tr,{key:o.id,...(0,t.onRowClick)({fn(){k("willEditTokenFromList"),y(`${D}/${o.id}`)},condition:s})},e.createElement(a.Td,null,e.createElement(a.Typography,{textColor:"neutral800",fontWeight:"bold"},o.name)),e.createElement(a.Td,{maxWidth:(0,t.pxToRem)(250)},e.createElement(a.Typography,{textColor:"neutral800",ellipsis:!0},o.description)),e.createElement(a.Td,null,e.createElement(a.Typography,{textColor:"neutral800"},e.createElement(t.RelativeTime,{timestamp:new Date(o.createdAt)}))),e.createElement(a.Td,null,o.lastUsedAt&&e.createElement(a.Typography,{textColor:"neutral800"},e.createElement(t.RelativeTime,{timestamp:new Date(o.lastUsedAt)}))),p&&e.createElement(a.Td,null,e.createElement(a.Flex,{justifyContent:"end"},s&&e.createElement(W,{tokenName:o.name,tokenId:o.id}),!s&&d&&e.createElement(G,{tokenName:o.name,tokenId:o.id}),l&&e.createElement(F,{tokenName:o.name,onClickDelete:()=>u(o.id)}))))))};C.defaultProps={canDelete:!1,canUpdate:!1,canRead:!1,onClickDelete(){},rows:[],withBulkActions:!1},C.propTypes={canDelete:n().bool,canUpdate:n().bool,canRead:n().bool,onClickDelete:n().func,rows:n().array,withBulkActions:n().bool};const Z=C,j=()=>{(0,t.useFocusWhenNavigate)();const l=(0,h.useQueryClient)(),{formatMessage:s}=(0,E.useIntl)(),d=(0,t.useNotification)(),{allowedActions:{canCreate:u,canDelete:p,canUpdate:g,canRead:c}}=(0,t.useRBAC)(R.Z.settings["api-tokens"]),{push:T}=(0,A.useHistory)(),{trackUsage:y}=(0,t.useTracking)(),{startSection:D}=(0,t.useGuidedTour)(),k=(0,e.useRef)(D),{get:w,del:o}=(0,t.useFetchClient)();(0,e.useEffect)(()=>{k.current&&k.current("apiTokens")},[]),(0,e.useEffect)(()=>{T({search:V().stringify({sort:"name:ASC"},{encode:!1})})},[T]);const L=$.map(r=>({...r,metadatas:{...r.metadatas,label:s(r.metadatas.label)}})),{data:m,status:v,isFetching:Y}=(0,h.useQuery)(["api-tokens"],async()=>{y("willAccessTokenList");const{data:{data:r}}=await w("/admin/api-tokens");return y("didAccessTokenList",{number:r.length}),r},{enabled:c,onError(){d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),N=c&&(v!=="success"&&v!=="error"||v==="success"&&Y),J=(0,h.useMutation)(async r=>{await o(`/admin/api-tokens/${r}`)},{async onSuccess(){await l.invalidateQueries(["api-tokens"]),y("didDeleteToken")},onError(r){r?.response?.data?.data?d({type:"warning",message:r.response.data.data}):d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),K=c&&m,X=c&&!m&&!u,q=c&&!m&&u;return e.createElement(a.Main,{"aria-busy":N},e.createElement(t.SettingsPageTitle,{name:"API Tokens"}),e.createElement(a.HeaderLayout,{title:s({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:s({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:u?e.createElement(t.LinkButton,{"data-testid":"create-api-token-button",startIcon:e.createElement(f.Plus,null),size:"S",onClick:()=>y("willAddTokenFromList"),to:"/settings/api-tokens/create"},s({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})):void 0}),e.createElement(a.ContentLayout,null,!c&&e.createElement(t.NoPermissions,null),K&&e.createElement(t.DynamicTable,{headers:L,contentType:"api-tokens",rows:m,withBulkActions:p||g||c,isLoading:N,onConfirmDelete:r=>J.mutateAsync(r)},e.createElement(Z,{canRead:c,canDelete:p,canUpdate:g,rows:m,withBulkActions:p||g||c})),q&&e.createElement(t.NoContent,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:e.createElement(a.Button,{variant:"secondary",startIcon:e.createElement(f.Plus,null)},s({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"}))}),X&&e.createElement(t.NoContent,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},z=()=>e.createElement(t.CheckPagePermissions,{permissions:R.Z.settings["api-tokens"].main},e.createElement(j,null))}}]);
